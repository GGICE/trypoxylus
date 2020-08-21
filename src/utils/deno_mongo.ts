import { prepare } from "https://deno.land/x/plugin_prepare@v0.7.2/mod.ts";
const VERSION = "v0.10.0";
const PLUGIN_NAME = "deno_mongo";

const RELEASE_URL =
  `https://github.com/manyuanrong/deno_mongo/releases/download/${VERSION}`;

const options = {
  name: PLUGIN_NAME,
  urls: {
    darwin: `${RELEASE_URL}/lib${PLUGIN_NAME}.dylib`,
    windows: `${RELEASE_URL}/${PLUGIN_NAME}.dll`,
    linux: `${RELEASE_URL}/lib${PLUGIN_NAME}.so`,
  },
};

prepare(options);