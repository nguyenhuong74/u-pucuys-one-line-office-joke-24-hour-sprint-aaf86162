// One-Line Office Joke: 24-Hour Sprint
// Writes a single one-line joke about office life to /output/entry.txt.
// Deterministic: no randomness, no network, no clock — every run
// writes the exact same bytes.

import { mkdirSync, writeFileSync } from "node:fs";

// The joke: one line, about office life. The printer is the only
// coworker that never misses a deadline — it just eats the paper.
const JOKE =
  "Our office printer only jams on documents due in five minutes — it's the one coworker that actually reads the deadline.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 200
// characters, not only whitespace, on a single line.
function validate(text: string): void {
  if (text.length < 1 || text.length > 200) {
    throw new Error(`joke must be 1-200 characters, got ${text.length}`);
  }
  if (text.trim().length === 0) {
    throw new Error("joke must not be only whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("joke must be a single line");
  }
}

validate(JOKE);

function main(): void {
  mkdirSync("/output", { recursive: true });
  // No trailing newline: the file is exactly the joke, one line.
  writeFileSync("/output/entry.txt", JOKE, "utf8");
}

main();
