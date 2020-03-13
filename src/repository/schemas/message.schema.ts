import * as mongoose from "mongoose";
export const MessageSchema = new mongoose.Schema ({
  
  id:{ required:true, unique: true, type: Number},
   subject: String,
    status: String,
    categoryId: String,
    projectId:{ required:true, unique: true, type: Number},
    tage:[],
    post: {type:mongoose.Types.ObjectId,ref:'MessagePost' ,required: true },
    eventCreator: {type:mongoose.Types.ObjectId,ref:'User' ,required: true },
    project: {type:mongoose.Types.ObjectId,ref:'Project' ,required: true },
  
  
 })


 
 