import * as mongoose from 'mongoose';
export const UserSchema =  new mongoose.Schema({
    id:{ required:true, unique: true, type: Number},
    firstName: String,
    lastName: String,
    email: String,
    avatar: String,
    type: String,
    companyId: String,
    dateCreated: String,
    dateUpdated: String,
  //  eventCreator: {type:mongoose.Types.ObjectId,
    //    ref:'User' ,required: true }
})