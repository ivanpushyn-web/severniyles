import configPromise from "@payload-config";
import { getPayload } from "payload";

/** Shared Payload local-API instance for server components / route handlers. */
export const getPayloadClient = async () => getPayload({ config: configPromise });
