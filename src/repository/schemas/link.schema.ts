import * as mongoose from "mongoose";
 export const LinkSchema = new mongoose.Schema ({
   id:{ required:true, unique: true, type: Number},

   title: String,
    description: String,
    code: String,
    width: String,
    height: String,
    tage:[],
    categoryId: String,
    projectId: String,
    dateCreated: String,
    dateUpdated: String,

  
 })
 