/*
Concatenating Json Objects

Credit to: @mugo_gocho <mugo@forfuture.co.ke>
License: MIT
 */


const fs = require("fs");
const path = require("path");


  /*
  Concatenates content from all JSON files encountered
  This is recursive and will go into directories looking for files with
  the extension ".json"
  
  @param <filepath> - {String} path to file/directory
  @param <resultObject> - {Object} object that will hold the result (see note 1)
  @param <callback> - {Function} callback(content, contentArray)
   */

const readContent = (filepath, resultObject = {contentString:"",contentArray:[]}, callback) => {
  var encounteredFile = () => filesEncountered++,
      filesEncountered = 0,
      filesProcessed = 0,
      processedFile,
      read
  ;

  if (resultObject.contentString == null) {
    resultObject.contentString = "";
  }
  if (resultObject.contentArray == null) {
    resultObject.contentArray = [];
  }

  processedFile = (fileContent) => {
    if (fileContent == null) {
      fileContent = "";
    }

    resultObject.contentString += fileContent;
    if (fileContent) {
      resultObject.contentArray.push(fileContent);
    }
    filesProcessed++;
    if (filesProcessed === filesEncountered) {
      return callback(resultObject);
    }
  };
  if (typeof filepath === "object") {
    resultObject.contentString += JSON.stringify(filepath);
    resultObject.contentArray.push(filepath);
    return callback(resultObject);
  }
  read = (filepath) => {
    encounteredFile();
    return fs.stat(filepath, (err, stats) => {
      if (err) {
        return processedFile(null);
      }
      if (stats.isDirectory()) {
        return fs.readdir(filepath, (err, files) => {
          var file, _i, _len;
          if (err) {
            return processedFile(null);
          }
          for (_i = 0, _len = files.length; _i < _len; _i++) {
            file = files[_i];
            read(path.join(filepath, file));
          }
          return processedFile(null);
        });
      } else if (stats.isFile()) {
        if (path.extname(filepath) === ".json") {
          return fs.readFile(filepath, {
            encoding: "utf8"
          }, (err, content) => {
            if (err) {
              return processedFile(null);
            }
            return processedFile(content);
          });
        } else {
          return processedFile(null);
        }
      }
    });
  };
  return read(filepath);
};

const concat = (contentArray, callback) => {
  let results = `[${contentArray.join(',')}]`;
  return callback(results);
}

module.exports = (userOptions, callback) => {
  var index, options, result, start;
  options = {
    src: userOptions.src || process.cwd(),
    dest: userOptions.dest || null
  };
  if (userOptions.dest === null) {
    options.dest = null;
  }
  if (typeof options.src === "string") {
    options.src = [options.src];
  }
  result = {};
  index = 0;
  start = (callback) => {
    const next = () => {
      return readContent(options.src[index], result, () => {
        ++index;
        if (index < options.src.length) {
          return next();
        }
        return concat(result.contentArray, (result) => {
          if (options.dest) {
            return fs.writeFile(options.dest, result, (err) => {
              return callback(err, result);
            });
          } else {
            return callback(null, result);
          }
        });
      });
    };
    return next();
  };
  return start(callback);
};