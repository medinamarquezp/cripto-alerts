#!/usr/bin/env node
import figlet from "figlet";
import { Command } from "commander";

const program = new Command();

program.name("cripto-alerts").description("Realtime email crypto alerts").version("1.0.0");

program
  .command("alerts:create")
  .description("Create a new alert")
  .action(() => undefined);

(() => {
  console.log(figlet.textSync("Cripto Alerts", { horizontalLayout: "full" }));
  program.parse();
})();
