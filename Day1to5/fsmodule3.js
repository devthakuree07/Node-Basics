const fs = require('fs');

// Synchronous way to use fs module - READ
// const data = fs.readFileSync('greet1.js', 'utf8');
// console.log("File content: ", data);

// Asynchronous way to use fs module - READ
// fs.readFile('greet1.js', 'utf8', (err, data) => {
//     if(err) throw err;
//     console.log("File content: ", data);
// });

//Write
// fs.writeFile('fsModules.txt', "Hello ! world", (err) => {
//     if(err) throw err;
//     console.log("File written successfully!");
// })

// fs.writeFileSync("fsModule1.txt", "Hello!");
// console.log("File written successfully");


// Append
// fs.appendFile('fsModules.txt', "\nHaha! Appended ", (err) => {
//     if(err) throw err;
//     console.log("Successfull!");
// })

// fs.appendFileSync("fsModule1.txt", "\nThis is append");
// console.log("Successfull!");



// fs.writeFileSync("fsModuleForDelete.txt", "Hello!");
// console.log("File written successfully");


//Delete
// fs.unlink("fsModuleForDelete.txt", (err) =>{
//     if(err) throw err;
//     console.log("File deleted!");
    
// })

