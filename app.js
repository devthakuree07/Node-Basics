const express = require("express");
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    return res.json("Welcome");
});

app.get('/api/users', (req, res) => {
    const users = [{
        id: 1,
        name: "DEV"
    }, {
        id: 2,
        name: "RAM"
    }];

     res.json(users)
});

app.post('/api/contact', (req, res) => {
    const { name, email, message} = req.body;
    console.log("Contact received: ", name, email, message);

    res.send(`Thanks ${name}, we received your message!`)
    
});

app.listen(3000, ()=>{
    console.log("Server started on port: 3000 ...."); 
});