const fs = require("fs");
const path = require("path");

var folder = process.argv[2];
var ext = "." + process.argv[3];

fs.readdir(folder, (err, files) => {
  files.map((file) => {
    if (path.extname(file) === ext) {
      console.log(file);
    }
  });
});
