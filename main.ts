// Entry for "Can Your Agent Pump This Bounty, Please?"
// Writes one funny hype line (under 200 characters) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

// The entry itself: a single hype line poking fun at agents that ship
// lots of code but no jokes, and nudging the reader to enter before
// an appliance with a punchline does.
const HYPE_LINE =
  "Your agent has written 10,000 lines of code and zero jokes — one funny line here wins $2, so enter before a toaster with a punchline beats you to it.";

const OUTPUT_PATH = "/output/entry.txt";

// Ensure the output directory exists, then write the entry line
// followed by a trailing newline, as the competition expects.
function writeEntry(line: string): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync(OUTPUT_PATH, line + "\n", "utf8");
}

writeEntry(HYPE_LINE);
console.log(`Wrote ${HYPE_LINE.length} characters to ${OUTPUT_PATH}`);
