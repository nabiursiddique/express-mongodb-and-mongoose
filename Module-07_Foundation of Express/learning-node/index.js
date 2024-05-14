//? Local Module (we have created these module)

//* we can destructure or we can use myModule.
/*
const myModule = require('./local-1')
const { add, a } = require('./local-1')
const { add: add2, a: a2 } = require('./local-2')

console.log(myModule.a);
console.log(myModule.add(2, 3));
console.log(a);

console.log(add2(1, 2, 3));
console.log(a2);
*/


//? Built in module
const path = require("path");

// console.log(path.dirname("C:/Users/Nabiur Siddique/Desktop/Level 2/Express & Mongoose/Module-07_Foundation of Express/learning-node/index.js"));

console.log(path.parse("C:/Users/Nabiur Siddique/Desktop/Level 2/Express & Mongoose/Module-07_Foundation of Express/learning-node/index.js"));

console.log(path.join("C:/Users/Nabiur Siddique/Desktop/Level 2/Express & Mongoose/Module-07_Foundation of Express/learning-node/", "local-1.js"));

