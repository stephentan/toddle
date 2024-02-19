const { parse } = require("csv-parse");
const fs = require("fs");

module.exports = (fileName) => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, function read(err, data) {
      if (err) {
        throw err;
      }
      parse(
        data,
        {
          comment: "#",
        },
        function (err, records) {
          resolve(records);
        }
      );
    });
  });
};
