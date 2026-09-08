import type { NextConfig } from "next";
import { withPayload } from "@payloadcms/next/withPayload";

const nextConfig: NextConfig = {
  // Payload's admin panel needs an SSR build (a running Node server),
  // so `output: "export"` / static export is intentionally not used.
};

export default withPayload(nextConfig, { devBundleServerPackages: false });
