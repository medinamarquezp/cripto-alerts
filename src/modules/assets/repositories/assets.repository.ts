import { Asset } from "../entities/asset.entity";
import { createAssetDto, updateAssetDto } from "../dtos/asset.dto";
import { Datasource } from "@/src/database";

const getRepository = async () => {
  const dataSource = await Datasource.getInstance();
  return dataSource.getRepository(Asset);
};

export const getAssets = async (): Promise<Asset[]> => {
  const repo = await getRepository();
  return await repo.find();
};

export const getAsset = async (assetId: string | number): Promise<Asset> => {
  const repo = await getRepository();
  return await repo
    .createQueryBuilder("asset")
    .where("asset.id = :assetId", { assetId })
    .orWhere("asset.assetId = :assetId", { assetId })
    .orWhere("asset.symbol = :assetId", { assetId })
    .orWhere("asset.name = :assetId", { assetId })
    .getOneOrFail();
};

export const createAsset = async (createdAsset: createAssetDto, returnsCreated = false): Promise<Asset | void> => {
  const repo = await getRepository();
  await repo.insert(createdAsset);
  if (returnsCreated) {
    return await getAsset(createdAsset.assetId);
  }
};

export const updateAsset = async (
  id: number,
  updatedAsset: updateAssetDto,
  returnsUpdated = false
): Promise<Asset | void> => {
  const repo = await getRepository();
  await repo.update(id, updatedAsset);
  if (returnsUpdated) {
    return await getAsset(id);
  }
};

export const deleteAsset = async (id: number, returnsDeleted = false): Promise<Asset | void> => {
  const repo = await getRepository();
  await repo.delete(id);
  if (returnsDeleted) {
    return await getAsset(id);
  }
};

export const upsertAsset = async (incomingAsset: createAssetDto, returnsAsset = false): Promise<Asset | void> => {
  let asset;
  const assetId = incomingAsset.assetId || "";
  const existingAsset = await getAsset(assetId);
  if (existingAsset) {
    asset = await updateAsset(existingAsset.id, incomingAsset, true);
  }
  asset = await createAsset(incomingAsset, true);
  if (returnsAsset) {
    return asset as Asset;
  }
};
