// path is a core module already installed with nodejs, documentation can be found on NodeJS website
const path = require('path');

// Base file name
// console.log(__filename);
// console.log(path.basename(__filename));

// // directory name
// console.log(path.dirname(__filename));

// // file extension
// console.log(path.extname(__filename));

// create path object
console.log(path.parse(__filename));
console.log(path.parse(__filename).base);

// concatenate paths
console.log(path.join(__dirname, 'test', 'hello.html'));