const inquirer = require('inquirer');
const colors = require('colors');
const pad = require('pad');
const values = require('../cmds/build-values');

const questions = [
  { type:'list', name:'build', message:'Select a category', choices: values.categoriesPlain },
  { type:'checkbox', name:'sources', message:'Select your sources', choices: values.sourcesPlain, default:['Core Rules'] },
];

module.exports = () => {
  return inquirer
    .prompt(questions)
    .then((answers) => {
      //console.log(answers);
      console.log("");
      console.log('Building Compendium');
      console.log('------------------');

      console.log(pad(colors.grey('Category: '), 30), answers.build);
      console.log(pad(colors.grey('Sources: '), 30), answers.sources);
      console.log("");
      return answers
    }).then((answers) => {
      const build = values.categories.find(item => item.name === answers.build);
      const sources = answers.sources.map((source, i) => {
        const match = values.sources.find(item => item.name === answers.sources[i]);
        if(answers.build === 'The Whole Schmagoygle') {
          return `./source/${match.path}`;
        } else {
          return `./source/${match.path}/${build.value}/`;
        }
      });

      return {build, sources}
    });
}