import express from 'express';
import dotenv from 'dotenv';

const app = express();

dotenv.config();
app.use(express.json());

app.get('/',(req, res)=>{
    res.send('you are at the homepage');
});

app.listen('3000', ()=>{
    console.log('server is running');
})