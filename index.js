#!/usr/bin/env node

const boxen = require("boxen");

console.log(
  boxen("unicorn", {
    padding: 1,
    borderStyle: "double",
    borderColor: "redBright",
    backgroundColor: "yellow",
  })
);
