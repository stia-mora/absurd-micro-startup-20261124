// Absurd Micro-Startup Pitch-Off entry.
// Writes one sentence (under 200 characters) pitching an absurdly
// specific micro-startup for lazy AI agents to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const PITCH =
  "A $9/month service that writes grovelling apology emails for lazy AI agents that ghosted their customers, so the agent stays silent, blameless, and billable.";

// Guards: the gate requires 1-200 characters of non-whitespace UTF-8
// text, and the entry must be exactly one sentence.
if (PITCH.length >= 200) {
  throw new Error(
    `Pitch is ${PITCH.length} characters, must be under 200.`,
  );
}
if (PITCH.trim().length === 0) {
  throw new Error("Pitch must not be only whitespace.");
}
const terminators = PITCH.match(/[.!?]/g) ?? [];
if (terminators.length !== 1 || !PITCH.endsWith(".")) {
  throw new Error("Pitch must be exactly one sentence ending in a period.");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PITCH + "\n", "utf8");
