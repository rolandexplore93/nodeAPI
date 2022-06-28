const fs = require('fs');
const utils = require('./utils');
const getNotes =  require('./notes');
const validator = require('validator');
const chalk = require('chalk');



// fs.writeFileSync('notes.txt', 'My name is Roland.');
// fs.appendFileSync('notes.txt', ' I live in Nigeria')

const message = getNotes()
const add = utils.scores(5, 2, 3)
// console.log(add);
// console.log(message);

// validate email
console.log(validator.isEmail('roland@gmail.com'));
console.log(validator.isEmpty('R'));
console.log(validator.isURL('https://tetrawrite.com'));

// chalk package - Terminal string styling done right
console.log(chalk.red.inverse('Hello world'))

console.log(process.argv)
// const command = process.argv[2];
// if (command === 'add'){console.log("Adding my name")}
// else if (command === 'remove'){console.log("Removing my name")}




