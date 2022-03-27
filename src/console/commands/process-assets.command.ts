import { processAssets } from "@/src/modules/assets/services/assets.service";
import { Command } from "commander";

const COMMAND = "process:assets";
const DESCRIPTION = "Download and create or update assets";

export const processAssetsCommand = (program: Command): Command => {
  return program
    .command(COMMAND)
    .description(DESCRIPTION)
    .action(async () => await processAssets());
};
