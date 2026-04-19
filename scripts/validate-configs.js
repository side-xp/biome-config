// This script is run in CI and Git hooks to make sure the JSON files are valid.
import { readdirSync, readFileSync } from 'node:fs'

// Filter  files named `biome.*.json`
const files = readdirSync('.').filter((f) => /^biome(\..+)?\.json$/.test(f))

for (const file of files) {
  try {
    JSON.parse(readFileSync(file, 'utf8'))
  } catch (error) {
    console.error(`Failed to parse file "${file}": ${error.message}`)
    process.exit(1)
  }
}
