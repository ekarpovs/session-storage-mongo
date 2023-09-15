import {describe, test} from '@jest/globals';

import { StorageConfig, sessionStorage } from '../src/session-storage';

describe("Simple Logger E2E test", () => {

  test("Has to write to a log", async ()=> {

    const storageConfig: StorageConfig = {
      uri: "",
      db: "",
      collection: "",
    };
        
    const storage = sessionStorage(storageConfig);

    console.log(storage);

  });
});