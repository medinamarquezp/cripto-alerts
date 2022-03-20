import { dataSource } from "@/src/database/data-source";
import { Asset } from "../entities/asset.entity";
import { createAssetDto, updateAssetDto } from "../dtos/asset.dto";

const assetRepository = dataSource.manager.getRepository(Asset);

export const getAssets = async (): Promise<Asset[]> => {
  return await assetRepository.find();
};

export const getAsset = async (assetId: string): Promise<Asset | null> => {
  return await assetRepository.createQueryBuilder("asset")
    .where("asset.assetId = :assetId", { assetId })
    .orWhere("asset.symbol = :assetId", { assetId })
    .orWhere("asset.name = :assetId", { assetId })
    .getOne();
};

export const createAsset = async (asset: createAssetDto): Promise<void> => {
  await assetRepository.insert(asset);
};

export const updateAsset = async (id: number, asset: updateAssetDto): Promise<void> => {
  await assetRepository.update(id, asset);
};

export const deleteAsset = async (id: number): Promise<void> => {
  await assetRepository.delete(id);
};

export const upsertAsset = async (incomingAsset: createAssetDto): Promise<void> => {
  const assetId = incomingAsset.assetId || "";
  const existingAsset = await getAsset(assetId);
  if (existingAsset) {
    return await updateAsset(existingAsset.id, incomingAsset);
  }
  return await createAsset(incomingAsset);
};
