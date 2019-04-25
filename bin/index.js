#! /usr/bin/env node

const program = require('commander');
const questions = require('../cmds/build-inquirer');
const build = require('../cmds/build');

program
  .version('0.1.0')
  .command('build')
  .alias('b')
  .description('Build a giant JSON file from resources in the Open Legend Compendium.')
  .action(() => {
    questions()
      .then((answers)=>{
        build.init(answers);
      });
  })

program.parse(process.argv);
