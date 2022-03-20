import { getDataSource } from "@/src/database/data-source";
import { Asset } from "../entities/asset.entity";
import { createAssetDto, updateAssetDto } from "../dtos/asset.dto";

const getRepository = async () => {
  const dataSource = await getDataSource();
  return dataSource.getRepository(Asset);
};

export const getAssets = async (): Promise<Asset[]> => {
  const repo = await getRepository();
  return await repo.find();
};

export const getAsset = async (assetId: string): Promise<Asset | null> => {
  const repo = await getRepository();
  return await repo.createQueryBuilder("asset")
    .where("asset.assetId = :assetId", { assetId })
    .orWhere("asset.symbol = :assetId", { assetId })
    .orWhere("asset.name = :assetId", { assetId })
    .getOne();
};

export const createAsset = async (asset: createAssetDto): Promise<void> => {
  const repo = await getRepository();
  await repo.insert(asset);
};

export const updateAsset = async (id: number, asset: updateAssetDto): Promise<void> => {
  const repo = await getRepository();
  await repo.update(id, asset);
};

export const deleteAsset = async (id: number): Promise<void> => {
  const repo = await getRepository();
  await repo.delete(id);
};

export const upsertAsset = async (incomingAsset: createAssetDto): Promise<void> => {
  const assetId = incomingAsset.assetId || "";
  const existingAsset = await getAsset(assetId);
  if (existingAsset) {
    return await updateAsset(existingAsset.id, incomingAsset);
  }
  return await createAsset(incomingAsset);
};
