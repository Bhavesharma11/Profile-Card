#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round',
}

// Text + chalk definitions
const data = {
  name: chalk.white('Bhavesh Sharma'),
  handle: chalk.greenBright('@Bhavesharma11'),
  // labelWork: chalk.white.bold('      Work:'),
  // work: chalk.white('In progress'),
  labelInstagram: chalk.white.bold(' Instagram:'),
  instagram: chalk.green('https://instagram.com/_bhavesharma_'),
  labelGitHub: chalk.white.bold('    GitHub:'),
  github: chalk.green('https://github.com/Bhavesharma11'),
  labelLinkedIn: chalk.white.bold('  LinkedIn:'),
  linkedin: chalk.green('https://linkedin.com/in/bhavesh-sharma-bb6535191'),
  labelWeb: chalk.white.bold('       Web:'),
  web: chalk.green('tiny.cc/bhavesh-portfolio'),
  labelCard: chalk.white.bold('      npm:'),
  npx: chalk.white('https://www.npmjs.com/~bhavesharma'),
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} / ${data.handle}`
// const working = `${data.labelWork}  ${data.work}`
const instagramming= `${data.labelInstagram}  ${data.instagram}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen
// effectively
const output =
  heading +
  newline +
  newline +
  instagramming +
  newline +
  githubing +
  newline +
  linkedining +
  newline +
  webing +
  newline +
  newline +
  carding

console.log(chalk.green(boxen(output, options)))
