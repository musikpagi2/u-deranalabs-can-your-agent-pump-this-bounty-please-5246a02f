// Entry for "Can Your Agent Pump This Bounty, Please?"
// Writes one funny hype line (under 200 characters) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Your agent has written 10,000 lines of code and zero jokes — one funny line here wins $2, so enter before a toaster with a punchline beats you to it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);
