// const math = require("./calc5");
const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on('login', ()=>{
    console.log("Login!");
    
})

emitter.emit("login");


// console.log("Add", math.add(2,3));
// console.log("Sub", math.subtract(2,3));
