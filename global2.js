/*
    Concepts
 */

// console.log("Directory:", __dirname); 
// console.log("Filename:", __filename);

// console.log("Platform", process.platform);
// console.log("Node Versions", process.version);
// console.log("Arguments", process.argv);

// console.log("Testing !");

// setTimeout(() => {
//     console.log("This runs after 2 sec!");
// }, 2000);

// setInterval(() => {
//     console.log("Repeats every 3 sec!");
// }, 3000);

/* Examples
*/

console.log("Current directory: ", __dirname);
console.log("Current file: ", __filename);

console.log("Node version: ", process.version);
console.log("Platform: ", process.platform);

setTimeout(() => {
    console.log("This is a delayed message!");
}, 1000);

let count = 0;
const interValid = setInterval(() => {
    count++;
    console.log("Interval running.. Count: ", count);
    if(count === 5)
        clearInterval(interValid);
}, 1000);


