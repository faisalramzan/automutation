import * as mongoose from 'mongoose';
export const MessagePostSchema = new mongoose.Schema({
  id: { required: true, unique: true, type: Number },
  body: String,
  status: String,
  dateCreated: String,
  userId: { required:true, unique: true, type: Number},
  messageId: { required:true, unique: true, type: Number},
  dateUpdated: String,
  eventCreator: { type: mongoose.Types.ObjectId, ref: 'User', required: true },
 // message: { type: mongoose.Types.ObjectId, ref: 'Message', required: true },
});
