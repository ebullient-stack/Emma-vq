#!/usr/bin/env python3
import json
import subprocess
import sys
import os

# Change to project directory
os.chdir('/vercel/share/v0-project')

print("[v0] Regenerating pnpm lockfile...")
print("[v0] Current directory:", os.getcwd())

try:
    # Run pnpm install to regenerate lockfile
    result = subprocess.run(['pnpm', 'install', '--frozen-lockfile=false'], 
                          capture_output=True, 
                          text=True)
    print("[v0] Command output:", result.stdout)
    if result.stderr:
        print("[v0] Command errors:", result.stderr)
    print("[v0] Lockfile regeneration completed successfully")
except Exception as e:
    print(f"[v0] Error regenerating lockfile: {e}")
    sys.exit(1)
