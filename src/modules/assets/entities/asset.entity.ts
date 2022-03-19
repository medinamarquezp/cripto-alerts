import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Asset {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: "asset_id" })
  assetId: string;

  @Column()
  rank: number;

  @Column()
  symbol: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  supply?: number;

  @Column({ name: "max_supply", type: "float", nullable: true })
  maxSupply?: number;

  @Column({ name: "market_cap_usd", type: "float", nullable: true })
  marketCapUsd?: number;

  @Column({ name: "volume_usd_24hr", type: "float", nullable: true })
  volumeUsd24Hr?: number;

  @Column({ name: "price_usd", type: "float" })
  priceUsd: number;
}