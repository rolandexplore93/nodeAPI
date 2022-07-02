const fs = require('fs');

//Assignment solution
// 1a. load and parse the JSON data from dataOne.json
const dataBuffer = fs.readFileSync('dataOne.json');
const dataJSON = dataBuffer.toString();
const user = JSON.parse(dataJSON);

// 1b. change the name and age property using your info
user.name = "RollyJS";
user.age = 28;
console.log(user)

// 1c. stringify the changed object and overwrite the original data
const userJSON = JSON.stringify(user)
fs.writeFileSync('dataOne.json', userJSON)
