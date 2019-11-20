// Module Wrapper Function, this wrap around Person
// (function (exports, require, module, __filename, __dirname)){

// }
console.log(__dirname, __filename);

class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    greeting() {
        console.log(`My name is ${this.name} and I am ${this.age}`)
    }
}

// to use person somewhere else
module.exports = Person;