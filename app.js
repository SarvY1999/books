require('dotenv').config();
require('express-async-errors');
const express = require('express');
const app = express();

const port = process.env.PORT || 3000;


const bookRouter = require('./routes/bookRoutes');
const connectDB = require('./db/connect');
app.use(express.json());
app.use('/api/v1/books', bookRouter);

app.get('/', (req, res) => {
    res.send('Working')
})

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);

        app.listen(port, () => {
            console.log(`listening at port ${port}`);
        })
    } catch (error) {
        console.log(error);
    }
};

start();