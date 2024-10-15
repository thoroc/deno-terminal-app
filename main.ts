import { parseArgs } from "jsr:@std/cli";
import { parse, printHelp } from "./src/cli.ts";
import file from "./deno.json" with { type: "json" };

const args = parseArgs(Deno.args);

console.dir(args);

const main = (inputArgs: string[]): void => {
  const args = parse(inputArgs);

  if (args.help) {
    printHelp(file.version);
    Deno.exit(0);
  }

  if (args.version) {
    console.log(`Cli: ${file.version}`);
    Deno.exit(0);
  }
};

main(Deno.args);
