import * as mongoose from "mongoose";
export const MessageReplySchema = new mongoose.Schema ({
  
  id:{ required:true, unique: true, type: Number},
    body: String,
    status: String,
    contentType: String,
    userId: String,
    messageId: String,
    dateCreated: String,
    dateUpdated: String,
    message: {type:mongoose.Types.ObjectId,ref:'Message' ,required: true },
    eventCreator: {type:mongoose.Types.ObjectId,ref:'User' ,required: true },
  
 })



 
 