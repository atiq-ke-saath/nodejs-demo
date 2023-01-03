// const fs = require('fs');
// const readFileSync = fs.readFileSync;

// const {x,y} = require('./4-names');
// console.log(x);
// console.log(y);

const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

// Creates a new file or overwrite the file
// const result = writeFileSync(
//   "./content/result-sync.txt",
//   `Here is the result: ${first}, ${second}`
// );

// Append to file
const result = writeFileSync(
  "./content/result-sync.txt",
  "New Text Appended...",
  { flag: "a" }
); 
