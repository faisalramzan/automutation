import * as mongoose from 'mongoose';

export const TageSchema= new mongoose.Schema({
  id:{ required:true, unique: true, type: Number},
  name: String,
    color: String,
  
  });
  