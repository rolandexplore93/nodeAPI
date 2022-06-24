const fs = require('fs');

fs.writeFileSync('notes.txt', 'My name is Roland.');
fs.appendFileSync('notes.txt', ' I live in Nigeria')

