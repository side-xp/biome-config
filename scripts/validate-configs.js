// This script is run in CI and Git hooks to make sure the JSON files are valid.

import { readdirSync, readFileSync } from 'node:fs'

const files = readdirSync('.').filter((f) => /^biome(\..+)?\.json$/.test(f))

for (const file of files) {
  try {
    JSON.parse(readFileSync(file, 'utf8'))
    console.log(`✓ ${file}`)
  } catch (err) {
    console.error(`✗ ${file}: ${err.message}`)
    process.exit(1)
  }
}
