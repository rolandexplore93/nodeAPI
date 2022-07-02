const fs = require('fs');

const getNotes = function(){
    return "Your notes";
}

const addNote = function(title, body){
    const notes = loadNotes();
    const filterDuplicateNotes = notes.filter(function removeDuplicate(note){
        console.log(`dataTitle: ${note.title} | userTitleEntry: ${title}`);
        return note.title === title
    });
    console.log(filterDuplicateNotes.length);

    if (filterDuplicateNotes.length === 0){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
        console.log("Note added")
    } else {
        console.log("Adding note not successful. Note title already exist!")
    }
}

const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function(){
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (error) {
        return []
    }
}

module.exports = {
    getNotes,
    addNote
}