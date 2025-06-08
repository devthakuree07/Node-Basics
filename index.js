const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const userRouter = require('./Routes/userRoutes');

const app = express();

app.use(express.json());

app.use(cors());
app.use(helmet());
app.use(morgan('dev'));


//custom middleware
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// app.post('/api/data', (req, res) => {
//     console.log('Body', req.body);
//     res.send('Data received!');
// });

app.use('/api/users',userRouter);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});