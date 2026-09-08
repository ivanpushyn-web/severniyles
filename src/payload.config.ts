import path from "path";
import { fileURLToPath } from "url";

import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { s3Storage } from "@payloadcms/storage-s3";
import { buildConfig } from "payload";
import sharp from "sharp";

import { Articles } from "@/collections/Articles";
import { Media } from "@/collections/Media";
import { Products } from "@/collections/Products";
import { Users } from "@/collections/Users";
import { migrations } from "@/migrations";
import { seed } from "@/seed";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const serverURL = process.env.NEXT_PUBLIC_SERVER_URL || "";

export default buildConfig({
  serverURL,
  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: "· Северный Лес",
    },
    components: {},
  },
  collections: [Articles, Products, Media, Users],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "dev-secret-change-me",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI,
      ssl: process.env.DATABASE_SSL === "true" ? { rejectUnauthorized: false } : undefined,
    },
    // In production the schema is created/updated by these migrations, which run
    // automatically on boot. In development Payload uses live schema push.
    prodMigrations: migrations,
  }),
  sharp,
  cors: serverURL ? [serverURL] : [],
  csrf: serverURL ? [serverURL] : [],
  plugins: [
    // The app's filesystem is wiped on every deploy, so uploaded media must
    // live in S3 rather than on local disk. In local dev (no S3 env vars)
    // this plugin is skipped and uploads fall back to the local disk.
    ...(process.env.S3_BUCKET
      ? [
          s3Storage({
            collections: { media: true },
            bucket: process.env.S3_BUCKET,
            config: {
              endpoint: process.env.S3_ENDPOINT,
              region: process.env.S3_REGION || "ru-1",
              forcePathStyle: true,
              credentials: {
                accessKeyId: process.env.S3_ACCESS_KEY || "",
                secretAccessKey: process.env.S3_SECRET_KEY || "",
              },
            },
          }),
        ]
      : []),
  ],
  async onInit(payload) {
    if (process.env.PAYLOAD_DISABLE_SEED === "true") return;
    try {
      await seed(payload);
    } catch (err) {
      payload.logger.error({ err }, "Content seed failed");
    }
  },
});
