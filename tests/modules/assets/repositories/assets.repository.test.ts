import { Asset } from '@/src/modules/assets/entities/asset.entity';
import { createAssetDto } from '@/src/modules/assets/dtos/asset.dto';
import {
  createAsset,
  deleteAsset,
  getAsset,
  getAssets,
  updateAsset,
  upsertAsset
} from '@/src/modules/assets/repositories/assets.repository';
import { clearData } from 'tests/utils';

describe('Assets repository tests', () => {
  let btcAsset: createAssetDto;

  beforeEach(async () => {
    btcAsset = {
      assetId: 'bitcoin',
      rank: 1,
      symbol: 'BTC',
      name: 'Bitcoin',
      supply: 18989012,
      maxSupply: 21000000,
      marketCapUsd: 789335918312.57,
      volumeUsd24Hr: 9715968277.38,
      priceUsd: 41568.04
    };
    await clearData();
  });

  it('should create a new asset', async () => {
    const createdAsset = await createAsset(btcAsset, true);
    expect(createdAsset).toMatchObject(btcAsset);
  });

  it('should get an existing asset', async () => {
    await createAsset(btcAsset);
    const asset = await getAsset(btcAsset.assetId);
    expect(asset).toMatchObject(btcAsset);
  });

  it('should get a list of existing asset', async () => {
    await createAsset(btcAsset);
    const assets = await getAssets();
    expect(assets.length).toBe(1);
    expect(assets[0]).toMatchObject(btcAsset);
  });

  it('should update an existing asset', async () => {
    const createdAsset = (await createAsset(btcAsset, true)) as Asset;
    const updatedAsset = (await updateAsset(createdAsset.id, { priceUsd: 10 }, true)) as Asset;
    expect(updatedAsset.priceUsd).toBe(10);
  });

  it('should delete an existing asset', async () => {
    const createdAsset = (await createAsset(btcAsset, true)) as Asset;
    await deleteAsset(createdAsset.id);
    const deletedAsset = getAsset(createdAsset.id);
    expect(deletedAsset).toBeNull;
  });

  it('should create and update an asset by using upsert method', async () => {
    const createdAsset = (await upsertAsset(btcAsset, true)) as Asset;
    expect(createdAsset).toMatchObject(btcAsset);
    const updatedAsset = (await upsertAsset({ assetId: createdAsset.assetId, priceUsd: 10 }, true)) as Asset;
    expect(updatedAsset.priceUsd).toBe(10);
  });
});
