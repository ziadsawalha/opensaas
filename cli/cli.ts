#!/usr/bin/env node

import yargs = require('yargs');

const argv = yargs.options({
  name: { type: 'string' },
}).argv;

const name = argv.name || argv._;

console.log(`Hello new sass app with name: ${name}`);
