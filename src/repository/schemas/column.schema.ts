import * as mongoose from "mongoose";
 export const ColumnSchema = new mongoose.Schema ({
   id:{ required:true, unique: true, type: Number},
   name: String,
    color: String,
    status: String,
    dateCreated: String,
    dateUpdated: String,

  
 })
