import fetch from "node-fetch";
import { CoincapAssetsList } from "../interfaces/coincap.interface";

const COINCAP_URI = "api.coincap.io";

export const getCoincapAssets = async (offset = 0, limit = 100 ): Promise<CoincapAssetsList> => {
  const path = `${COINCAP_URI}/v2/assets?offset=${offset}&limit=${limit}`;
  const response = await fetch(path);
  const data = await response.json();
  return data as CoincapAssetsList;
};
