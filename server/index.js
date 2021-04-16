import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import userRoutes from './routes/users.js'
import busetasRoutes from './routes/busetas.js'

const app = express(); //initializing

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ limit : "30mb", extended: true}));
app.use(cors());

app.use('/clientes', userRoutes);
app.use('/busetas', busetasRoutes);

//
const CONNECTION_URL = 'mongodb+srv://dividucciAdmin:MFMDOmw59AM10gSB@cluster0.fiti5.mongodb.net/Busetas?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, 
    {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.error(error) );

mongoose.set('useFindAndModify', false);