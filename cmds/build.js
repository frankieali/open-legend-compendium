const fs = require('fs');
const async = require('async');
const colors = require('colors');
const concatJSON = require("../lib/concatJSON");
const values = require('../cmds/build-values');

exports.init = (options) => {
  //console.log("options from build.js", options);
  const dist = './dist';

  if (!fs.existsSync(dist)){
      fs.mkdirSync(dist);
  }

  if(options.build.value === 'all') {
    async.map(values.categories, (item, callback) => {
      if(item.value === 'all') {
        return callback(null);
      }
      let sources = options.sources.map((source) => {
        return `${source}/${item.value}`
      })
      return concatJSON({
        src: sources,
      }, function (err,json) {
          return callback(null, `"${item.value}":${json}`);
      });
    }, (err, results) => {
      const data = `{${results.filter(Boolean).join(',')}}`;
      fs.writeFile('./dist/compendium.json', data, (err) => {
        if (err) throw err;
        console.log(colors.yellow('The complete compedium has been saved to ./dist/compendium.json'));
        console.log("");
      });
    });

  } else {
    concatJSON({
      src: options.sources,
      dest: `./dist/${options.build.value}.json`,
    }, function (err,json) {
        console.log(colors.yellow(`${options.build.name} has been saved to ./dist/${options.build.value}.json`))
        console.log("");
    });
  }
}