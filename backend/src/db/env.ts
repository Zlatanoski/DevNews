import { existsSync, readFileSync } from "node:fs"
import { resolve } from "node:path"

const loadEnvFile = (path: string) => {
  if (!existsSync(path)) return;

  const lines = readFileSync(path, "utf8").split("\n");

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;

    const separatorIndex = trimmed.indexOf("=");
    if (separatorIndex === -1) continue;

    const key = trimmed.slice(0, separatorIndex);
    const value = trimmed.slice(separatorIndex + 1);
    process.env[key] ??= value;
  }
}

loadEnvFile(resolve(process.cwd(), ".env"))
loadEnvFile(resolve(process.cwd(), "backend/.env"))
loadEnvFile(resolve(process.cwd(), "../.env"))
