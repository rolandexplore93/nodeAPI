const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {
    return "Your notes";
}
getNotes()

//  add notes
const addNote = (title, body) => {
    const notes = loadNotes();
    // const filterDuplicateNotes = notes.filter(note => {
        //     return note.title === title
        // });
        
        // using find() method over filter()
        const duplicateNotes = notes.find((note) => {
        console.log(`dataTitle: ${note.title} | userTitleEntry: ${title}`);
        return note.title === title;
    });

    debugger

    if (!duplicateNotes){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
        console.log("Note added")
    } else {
        console.log("Adding note not successful. Title already exist!")
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (error) {
        return []
    }
}

// remove notes
const removeNote = (title) => {
    const retreiveNotes = loadNotes();
    const noteToKeep = retreiveNotes.filter((retreiveNote) => {
        return retreiveNote.title !== title;
    });

    if (retreiveNotes.length > noteToKeep.length){
        saveNotes(noteToKeep);
        console.log(chalk.green.inverse('Note removed!'))
        console.log(`Data with title name ${title} has been deleted from user database`)
    } else {
        console.log(chalk.red.inverse('No note found!'))
    }
}


// list notes
const listNotes = (title) => {
    console.log(chalk.green.inverse("Your notes"));
    const retreiveNotes = loadNotes();
    return retreiveNotes.forEach(note => {
        console.log(note.title)
    })
}

// read notes
const readNote = (title) => {
    const retreiveNotes = loadNotes();
    const noteToRead = retreiveNotes.find((note) => {
        console.log(`dataTitle: ${note.title} | userTitleEntry: ${title}`);
        return note.title === title
    });
    
    if (noteToRead){
        console.log(`Title: ${chalk.green.inverse(noteToRead.title)} \nBody: ${noteToRead.body}`)
    } else {
        console.log(`${chalk.red.inverse("Oops! This note doesn't exist")}`)
    }

}


module.exports = {
    getNotes,
    addNote,
    removeNote,
    listNotes,
    readNote
}