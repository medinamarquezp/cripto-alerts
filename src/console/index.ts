#!/usr/bin/env node
import { textSync } from "figlet";
import { Command } from "commander";
import { title, description, version } from "../../package.json";
import { processAssetsCommand } from "./commands/process-assets.command";

let program = new Command();
program.name("cmd").description(description).version(version);
program = processAssetsCommand(program);

(() => {
  console.log(textSync(title));
  if (process.argv.length < 3) program.help();
  program.parse();
})();
