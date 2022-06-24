const fs = require("fs");

fs.readFile(process.argv[2], "utf8", (err, data) => {
  var count = data.split("\n").length - 1;
  console.log(count);
});
