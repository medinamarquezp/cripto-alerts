/* eslint-disable no-constant-condition */
import { logAndOutput } from "@/src/modules/shared/logger";
import { getCoincapAssets } from "./coincap.service";
import { upsertAsset } from "../repositories/assets.repository";

export const processAssets = async (limit = 1000, maxIterations = 0) => {
  let offset = 0;
  const totalAssets = !offset ? limit : (offset + 1) * limit;

  logAndOutput(`processAssets: process started with ${totalAssets} assets`, "info");
  while (true) {
    const assets = await getCoincapAssets(offset, limit);
    if (!assets) break;
    for await (const asset of assets) {
      logAndOutput(`Processing ${asset.name} data...`);
      await upsertAsset(asset);
    }
    offset += 1;
    if (maxIterations && maxIterations >= offset) break;
  }
  logAndOutput(`processAssets: ${totalAssets} assets processed succefully!`, "info");
};
