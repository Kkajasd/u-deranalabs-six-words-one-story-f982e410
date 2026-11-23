import { mkdirSync, writeFileSync } from "node:fs";

// One complete story in exactly six words.
// Deterministic: the same text on every run. No network, no file reads.
// Never deletes /output: the dir is created if missing and entry.txt is
// written in place (the sandbox bind-mounts /output).
// Why this line: a whole arc in six words — homecoming, then the turn:
// the locks are changed, so home is no longer his. It reads cleanly
// aloud, every word earns its place, and it leaves the why unsaid:
// betrayal, a new life, a warning — the reader fills it in.
const LINE = "He came home. She'd changed locks.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
