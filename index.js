const fs = require('fs');
// const utils = require('./utils');
const notes =  require('./notes');
const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs')



// fs.writeFileSync('notes.txt', 'My name is Roland.');
// fs.appendFileSync('notes.txt', ' I live in Nigeria')

// const message = getNotes()
// const add = utils.scores(5, 2, 3)
// console.log(add);
// console.log(message);

// validate email
// console.log(validator.isEmail('roland@gmail.com'));
// console.log(validator.isEmpty('R'));
// console.log(validator.isURL('https://tetrawrite.com'));

// // chalk package - Terminal string styling done right
// console.log(chalk.red.inverse('Hello world'))

// console.log(process.argv)
// const command = process.argv[2];
// if (command === 'add'){console.log("Adding my name")}
// else if (command === 'remove'){console.log("Removing my name")}

// yargs library
// console.log(yargs.argv.title)
// console.log(yargs.command)

// create a 'add' command using yargs.command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    //add title and body to the command using builder key
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'note content body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        const saveUserInput = notes.addNote(argv.title, argv.body)
    }
})

// create a 'remove' command using yargs.command
yargs.command({
    command: 'remove',
    describe: 'remove a new note',
    builder: {
        title: {
            describe: "remove a note with this title description",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv){
        const removeData = notes.removeNote(argv.title)
    }
})

// create a 'list' command using yargs.command
yargs.command({
    command: 'list',
    describe: 'listing all files',
    handler(){
        const listNotes = notes.listNotes()
    }
})

// create a 'read' command using yargs.command
yargs.command({
    command: 'read',
    describe: 'read a note',
    builder: {
        title: {
            describe: "read a note with title that matches user title input",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv){
        notes.readNote(argv.title);
    }
})
// console.log(yargs.argv)
yargs.parse()

