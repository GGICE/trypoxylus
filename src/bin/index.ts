#!/usr/bin/env ts-node-script
import { program } from 'commander';
import * as path from 'path';
import { start } from '../index';

program
  .command('start <dir>')
  .option('-p, --port <port>', 'Listen on port')
  .action((dir, cmdObj) => {
    let appPath: string;

    if (dir.indexOf('/') === 0) {
      appPath = dir;
    } else {
      appPath = path.join(process.cwd(), dir);
    }

    start(appPath, cmdObj.port);
  })

program.parse(process.argv)