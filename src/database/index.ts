import { DataSource } from "typeorm";
import { getDataSource } from "./data-source";

export class Datasource {
  private static instance: DataSource;

  static async getInstance() {
    if (!Datasource.instance) {
      Datasource.instance = await getDataSource();
      return Datasource.instance;
    }
    return Datasource.instance;
  }

}