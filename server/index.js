import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import PaperRouter from './Routes/paper.js';

const app = express();


dotenv.config();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('you are at the homepage');
});

app.use('/papers', PaperRouter);

const CONNECTION_URL = 'mongodb+srv://practice_project:1234@cluster0.32njx.mongodb.net/test';
const PORT = 3000;


mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    app.listen(PORT, () => {
        console.log('server is running');
    })
}).catch(err => {
    console.log(err);
});

