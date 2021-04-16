import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    code:String,
    name:String,
    lastName:String,
    secondSurname:String,
    identification:String
});

const user = mongoose.model('Cliente', userSchema, 'Cliente');

export default user;