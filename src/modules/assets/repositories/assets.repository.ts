import { dataSource } from "@/src/database/data-source";
import { Asset } from "../entities/asset.entity";
import { createAssetDto, updateAssetDto } from "../dtos/asset.dto";

export const getAssets = async (): Promise<Asset[]> => {
  return await dataSource.createQueryBuilder(Asset, "asset").getMany();
};

export const getAssetbyId = async (assetId: string): Promise<Asset[]> => {
  return await  dataSource.createQueryBuilder(Asset, "asset")
    .where("asset.assetId = :assetId", { assetId })
    .orWhere("asset.symbol = :assetId", { assetId })
    .orWhere("asset.name = :assetId", { assetId })
    .getMany();
};

export const createAsset = async (asset: createAssetDto): Promise<void> => {
  await dataSource.createQueryBuilder()
    .insert()
    .into(Asset)
    .values(asset)
    .execute();
};

export const updateAsset = async (id: number, asset: updateAssetDto): Promise<void> => {
  await dataSource.createQueryBuilder()
    .update(Asset)
    .set(asset)
    .where("id = :id", { id })
    .execute();
};

export const deleteAsset = async (id: number): Promise<void> => {
  await dataSource.createQueryBuilder()
    .delete()
    .from(Asset)
    .where("id = :id", { id })
    .execute();
};
