#!/usr/bin/env node

const chalk = require("chalk");
const boxen = require("boxen");

const card = {
  name: "                " + chalk.white.italic("Dorian Goffette - "),
  pseudo: chalk.green.italic("Azhro"),
  labelWork: chalk.white.bold("    Work:"),
  work: chalk.white("Learning at BeCode"),
  labelNpm: chalk.white.bold("     npm:"),
  npm: chalk.white.dim("https://npmjs.com/") + chalk.redBright("~azhro"),
  labelGithub: chalk.white.bold("  Github:"),
  github: chalk.white.dim("https://github.com/") + chalk.gray("GoffetteDorian"),
  labelLinkedin: chalk.white.bold("LinkedIn:"),
  linkedin:
    chalk.white.dim("https://linkedin.com/in/") +
    chalk.blue("dorian-goffette-740511133"),
  labelNpx: chalk.white.bold("    Card:"),
  npx: chalk.white("npx azhro"),
};

//End point
console.log(
  boxen(
    [
      `${card.name}${card.pseudo}`,
      `\n`,
      `${card.labelWork} ${card.work}`,
      `${card.labelNpm} ${card.npm}`,
      `${card.labelGithub} ${card.github}`,
      `${card.labelLinkedin} ${card.linkedin}`,
      `\n`,
      `${card.labelNpx} ${card.npx}`,
    ].join("\n"),
    {
      padding: 1,
      borderStyle: "round",
      borderColor: "redBright",
    }
  )
);

//console.clear();
