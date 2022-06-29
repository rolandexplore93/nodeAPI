const fs = require('fs');

// const book = {
//     title: "The Ornament Villa",
//     author: "Orobola Roland"
// }

// const bookStringify = JSON.stringify(book);
// const bookParsed = JSON.parse(bookStringify)

// fs.writeFileSync('dataOne.json', bookStringify)

// const dataBuffer = fs.readFileSync('dataOne.json');
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data)

//Assignment solution
// 1a. load and parse the JSON data
const dataBuffer = fs.readFileSync('dataOne.json');
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);

// 1b. change the name and age property using your info
data.name = "Roland";
data.age = 28
console.log(data)

// 1c. stringify the changed object and overwriter the original data
const dataStringify = JSON.stringify(data)
fs.writeFileSync('dataOne.json', dataStringify)
