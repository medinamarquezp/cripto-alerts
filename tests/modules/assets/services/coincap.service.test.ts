import { createAssetDto } from "@/src/modules/assets/dtos/asset.dto";
import { getCoincapAssets } from "@/src/modules/assets/services/coincap.service";

describe("Coincap service test", () => {
  it("should return null if no assets were found", async () => {
    const offset = 1_000_000_000;
    const limit = 10;
    const assets = await getCoincapAssets(offset, limit);
    expect(assets).toBeNull();
  });

  it("should return a parsed asset", async () => {
    const offset = 0;
    const limit = 1;
    const assets = await getCoincapAssets(offset, limit);
    if (assets) {
      const { rank, supply, marketCapUsd } = assets[0];
      expect(typeof rank).toBe("number");
      expect(typeof supply).toBe("number");
      expect(typeof marketCapUsd).toBe("number");
    }
  });
});
