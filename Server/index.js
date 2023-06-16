import express from 'express';
import cors from 'cors'
import bodyParser from 'body-parser';
import router from './View/route.js';
import { connection } from './dbconnection.js';
const app = express();

app.use(cors());
app.use(express.json());
// app.use(bodyParser.json({ extended: true }))
// app.use(bodyParser.urlencoded({ extended: true }))


app.use("/", router);





const PORT = 5000;
// 103.205.135.167/32, kashemdeveloper, 1234
// const url = "mongodb+srv://kashemdeveloper:1234@cluster0.u3ygwbg.mongodb.net/?retryWrites=true&w=majority";
const url = "mongodb://127.0.0.1:27017/dbCrud";

connection(url);


app.listen(PORT, () => {

    console.log(`Server is running on port ${PORT}`);
});

