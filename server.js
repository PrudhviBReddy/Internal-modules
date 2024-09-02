let os = require("node:os");
let path = require("node:path");
let moment = require("moment");

console.log(os.platform());
console.log(os.totalmem()/1024/1024/1024);
console.log(os.freemem()/1024/1024);
console.log(os.release());
console.log(path.parse());

console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));