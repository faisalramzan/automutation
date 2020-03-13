import * as mongoose from 'mongoose';
export const UserSchema =  new mongoose.Schema({
    id:{ required:true, unique: true, type: Number},
    firstName: String,
    lastName: String,
    avatar: String,
})