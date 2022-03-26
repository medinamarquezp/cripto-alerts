import { getAssets } from "@/src/modules/assets/repositories/assets.repository";
import { processAssets } from "@/src/modules/assets/services/assets.service";

describe("Assets service tests", () => {
  it("should process assets", async () => {
    await processAssets(1, 1);
    const assets = await getAssets();
    expect(assets.length).toBe(1);
  });
});
