import * as mongoose from 'mongoose';
export const TaskListSchema = new mongoose.Schema({
  id: { required: true, unique: true, type: Number },
  name: String,
  description: String,
  status: String,
  milestoneId: String,
  projectId: { required: true, unique: true, type: Number },
  eventCreator: { type: mongoose.Types.ObjectId, ref: 'User', required: true },
  project: { type: mongoose.Types.ObjectId, ref: 'Project', required: true },
  tage: [],
});
