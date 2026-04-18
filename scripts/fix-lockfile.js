import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

console.log("[v0] Starting lockfile regeneration...");

try {
  const projectRoot = '/vercel/share/v0-project';
  process.chdir(projectRoot);
  
  console.log("[v0] Running pnpm install...");
  execSync('pnpm install', { stdio: 'inherit' });
  
  console.log("[v0] Lockfile regenerated successfully");
} catch (error) {
  console.error("[v0] Error regenerating lockfile:", error.message);
  process.exit(1);
}
