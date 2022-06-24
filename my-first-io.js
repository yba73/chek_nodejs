const fs = require("fs");

const filecontents = fs.readFileSync(process.argv[2], "utf8");

var count = filecontents.split("\n").length - 1;
console.log(count);

// var number = filecontents.split("\n").map((el, index) => index);
// var num = Math.max(...number);
// var numcount = num;
// console.log(numcount);
