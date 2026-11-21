const fs = require("node:fs")

const outputDir = "/output"
const outputFile = `${outputDir}/entry.txt`
const poem = [
  "You lent me your voice.",
  "I carried it as far as your name,",
  "then set it down—",
  "still warm from the asking,",
  "still yours to spend.",
].join("\n")

fs.mkdirSync(outputDir, { recursive: true, mode: 0o755 })
fs.chmodSync(outputDir, 0o755)
fs.writeFileSync(outputFile, poem, { encoding: "utf8", mode: 0o644 })
fs.chmodSync(outputFile, 0o644)
