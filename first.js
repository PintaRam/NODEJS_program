const fs = require("fs");
const my = require("./mymodule");
console.log(my.avg())
fs.writeFileSync("text.txt" ,"Ram Ram Ram Ram Ram Ram Ram Ram Ram Ram Ram Ram Ram");
let text = fs.readFileSync("text.txt" ,"utf-8");
console.log(text);
//console.log(my.name());
