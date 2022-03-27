/* eslint-disable no-constant-condition */
import { logAndOutput } from "@/src/modules/shared/logger";
import { getCoincapAssets } from "./coincap.service";
import { upsertAsset } from "../repositories/assets.repository";

export const processAssets = async (limit = 1000, maxIterations = 0) => {
  let [offset, iterations, assetsSet] = Array(3).fill(0);
  const nextSet = (iterations: number) => (iterations + 1) * limit;
  try {
    while (true) {
      logAndOutput(`processAssets: process started for ${assetsSet} assets`, "info");
      const assets = await getCoincapAssets(offset, limit);
      if (!assets) break;
      for await (const asset of assets) {
        logAndOutput(`Processing ${asset.name} data...`);
        await upsertAsset(asset);
      }
      logAndOutput(`processAssets: ${assetsSet} assets processed succefully!`, "info");
      iterations += 1;
      offset = nextSet(iterations);
      assetsSet = offset;
      if (maxIterations && maxIterations >= iterations) break;
    }
  } catch (err) {
    const error = err as Error;
    logAndOutput(`processAssets: error on processing assets: ${error.message}`, "error");
  }
};
