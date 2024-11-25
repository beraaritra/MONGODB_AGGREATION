import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors'
import bodyParser from 'body-parser';



// import database from './config/db.js';
const app = express();

dotenv.config();

const PORT = process.env.PORT || 8000;



app.listen(PORT, async () => {
    // await database();
    console.log(`The Server Started on PORT ${PORT}`.bgBlue);
});


export default app;