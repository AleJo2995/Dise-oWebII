import mongoose from 'mongoose';

const busetaSchema = mongoose.Schema({
    code:String,
    name:String,
    brand:String,
    model:String,
    year:String,
    licensePlate:String,
    defaultSpaces:Number,
    spacesAvailable:Number,
});

const buseta = mongoose.model('Buseta', busetaSchema, 'Buseta');

export default buseta;