import { join } from "path";
import { DataSource } from "typeorm";
import { SqliteConnectionOptions } from "typeorm/driver/sqlite/SqliteConnectionOptions";

const env = process.env.NODE_ENV;
const database = env === "test" ? ":memory:" : "data.db";
const entities = [join(__dirname, "..", "**", "*.entity.{js,ts}")];

const dataSourceConfig: SqliteConnectionOptions = {
  type: "sqlite",
  entities,
  logging: false,
  database,
  synchronize: true,
};

export const dataSource = new DataSource(dataSourceConfig);