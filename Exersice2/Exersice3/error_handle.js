
const fs = require('fs').promises;
fs.readFile('filetxt','utf8')
.then(data =>{
    console.log(data)
})
.catch(error =>{
    console.log("Error reading file " ,error.message);
})