import fetch from "node-fetch";
import { createAssetDto } from "../dtos/asset.dto";
import { CoincapAssetsList } from "../interfaces/coincap.interface";

const COINCAP_URI = "https://api.coincap.io/v2";

export const getCoincapAssets = async (offset = 0, limit = 100): Promise<createAssetDto[] | null> => {
  const path = `${COINCAP_URI}/assets?offset=${offset}&limit=${limit}`;
  const response = await fetch(path);
  const data = await response.json();
  return parseResponse(data);
};

const parseResponse = (response: unknown): createAssetDto[] | null => {
  const parsedResponse: createAssetDto[] = [];
  const { data } = response as CoincapAssetsList;
  const parseDecimals = (property: string) => Number(Number(property).toFixed(2));
  if (!data.length) return null;
  data.forEach(asset => {
    parsedResponse.push({
      assetId: asset.id,
      rank: Number(asset.rank),
      symbol: asset.symbol,
      name: asset.name,
      supply: Number(asset.supply),
      maxSupply: asset.maxSupply ? parseDecimals(asset.maxSupply) : undefined,
      marketCapUsd: parseDecimals(asset.marketCapUsd),
      volumeUsd24Hr: parseDecimals(asset.volumeUsd24Hr),
      priceUsd: parseDecimals(asset.priceUsd)
    });
  });
  return parsedResponse;
};
