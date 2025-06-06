// const path = require("path");
// const math = require("./math1");
const eventEmitter = require("events");

const emitter = new eventEmitter();
emitter.on("greet", ()=> {
    console.log("Hello from event!");
    
})

emitter.emit('greet');
// console.log("FilePath: ", __filename);
// console.log("Base file: ", path.basename(__filename));
// console.log(math.add(2,3));

