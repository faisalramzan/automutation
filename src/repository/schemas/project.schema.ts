import * as mongoose from 'mongoose';
export const ProjectSchema = new mongoose.Schema({
  id: { required: true, unique: true, type: Number },
  name: String,
  description: String,
  status: String,
  startDate: String,
  endDate: String,
  ownerId: Number,
  //companyId:{ required:true, unique: true, type: Number},
  dateCreated: String,
  eventCreator: { type: mongoose.Types.ObjectId, ref: 'User', required: true },
 company: { type: mongoose.Types.ObjectId, ref: 'Company', required: true },
});
