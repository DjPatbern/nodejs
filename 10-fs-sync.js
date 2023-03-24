const {readFileSync, writeFileSync} = require("fs")

const first = readFileSync("./content/first.txt", "utf8")
const second = readFileSync("./content/second.txt", "utf8")

// console.log(first + "and " + second);

writeFileSync("./content/magicCreate.txt", `Now this is just the biginning`, {flag: "a"})



