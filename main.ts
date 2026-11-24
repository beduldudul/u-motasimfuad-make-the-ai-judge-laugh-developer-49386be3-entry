import { mkdirSync, writeFileSync } from "node:fs";

// One funny single-line excuse a developer gives when code breaks in production.
// The twist: the developer didn't ship a bug at all — production did the promoting.
const entry =
  "I didn't push a bug to production — I pushed a feature, and production promoted it to an incident.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry + "\n", "utf8");
