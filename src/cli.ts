import { type Args, parseArgs } from "jsr:@std/cli";

export const printHelp = (version: string): void => {
  console.log(`cli v${version}`);
  console.log(`Usage: cli [OPTIONS...]`);
  console.log("\nOptional flags:");
  console.log("  -h, --help                Display this help and exit");
};

export const parse = (args: string[]): Args => {
  const booleanArgs = ["help", "version"];
  const aliasArgs = {
    help: "h",
    version: "v",
  };

  return parseArgs(args, {
    boolean: booleanArgs,
    alias: aliasArgs,
  });
};
