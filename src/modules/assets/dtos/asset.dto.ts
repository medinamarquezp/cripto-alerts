export interface createAssetDto {
  assetId: string,
  rank: number,
  symbol: string,
  name: string,
  supply?: number,
  maxSupply?: number,
  marketCapUsd?: number,
  volumeUsd24Hr?: number,
  priceUsd: number,
}

export type updateAssetDto = Partial<createAssetDto>;