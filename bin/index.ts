#!/usr/bin/env -S deno run --allow-net --allow-read --allow-write --allow-plugin --unstable

import Denomander from "https://deno.land/x/denomander/mod.ts";
import { start } from "../src/index.ts";

const program = new Denomander(
  {
    app_name: "Trypoxylus",
    app_description: "Trypoxylus",
    app_version: "0.0.1",
  },
);

program
  .command("start [dir]", "start")
  .option("-p, --port ", "Listen on port")
  .parse(Deno.args);

start(await Deno.realPath(program.dir), program.port);
