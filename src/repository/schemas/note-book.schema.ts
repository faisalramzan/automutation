import * as mongoose from "mongoose";
 export const NoteBookSchema = new mongoose.Schema ({
  id:{ required:true, unique: true, type: Number},

  name: String,
    description: String,
    code: String,
    tage:[],
    categoryId: String,
    projectId: String,
    dateCreated: String,
    version: String,
    versionId: String,

  
 })
 