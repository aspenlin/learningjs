const fs = require('fs');
const path = require('path');

// create folder
// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//     if(err) throw err;
//     console.log('Folder created');
// });

// create and write to the file
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'hello world', err => {
//     if(err) throw err;
//     console.log('File written to...');

//     // append file, callback
//     fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), 'I love NodeJS', err => {
//         if(err) throw err;
//         console.log('File written to...');
//     });
// });

// read file

// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
//     if(err) throw err;
//     console.log(data);
// });

// rename a file
fs.rename(path.join(__dirname, '/test', 'hello.txt'), 
              path.join(__dirname, '/test', 'helloworld.txt'), 
              err => {
    if(err) throw err;
    console.log('File renamed');
});