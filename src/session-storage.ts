import MongoStore from 'connect-mongo';

export type StorageConfig = {
  uri: string;
  db: string;
  collection: string;
};
  
export const sessionStorage = (config: StorageConfig): MongoStore => {
  // Create session storage
  return MongoStore.create({
    mongoUrl: config.uri,
    dbName: config.db,
    collectionName: config.collection,
    ttl: 20000
  });
};
