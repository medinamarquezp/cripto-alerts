import { Datasource } from '@/src/database';

export const clearData = async () => {
  const datasource = await Datasource.getInstance();
  const entities = datasource.entityMetadatas;
  for (const entity of entities) {
    const repository = datasource.getRepository(entity.name);
    await repository.clear();
  }
};
