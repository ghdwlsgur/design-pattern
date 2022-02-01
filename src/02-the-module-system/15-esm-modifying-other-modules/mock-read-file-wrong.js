import * as fs from 'fs';

const originalReadFile = fs.readFile;

let mockedResponse = null;

function mockedReadFile(path, cb) {
  setImmediate(() => {
    cb(null, mockedResponse);
  });
}

export function mockEnable(respondWith) {
  mockedResponse = respondWith;
  fs.readFile = mockedReadFile; // this will fail with:
  // TypeError: Cannot assign to read only property 'readFile' of object '[object Module]'
}

export function mockDisable() {
  fs.readFile = originalReadFile;
}
