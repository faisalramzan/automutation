import * as mongoose from 'mongoose';
export const TaskSchema = new mongoose.Schema({
  id: { required: true, unique: true, type: Number },
  name: String,
  priority: String,
  status: String,
  parentId: String,
  startDate: String,
  dueDate: String,
  tage: [{}],
  projectId: { required: true, unique: true, type: Number },
  taskListId: { required: true, unique: true, type: Number },
  dateCreated: String,
  dateUpdated: String,
  taskList: { type: mongoose.Types.ObjectId, ref: 'TaskList', required: true },
  eventCreator: { type: mongoose.Types.ObjectId, ref: 'User', required: true },
  project: { type: mongoose.Types.ObjectId, ref: 'Project', required: true },
});
