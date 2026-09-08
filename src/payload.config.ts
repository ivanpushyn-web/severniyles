import path from "path";
import { fileURLToPath } from "url";

import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
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
  async onInit(payload) {
    if (process.env.PAYLOAD_DISABLE_SEED === "true") return;
    try {
      await seed(payload);
    } catch (err) {
      payload.logger.error({ err }, "Content seed failed");
    }
  },
});
