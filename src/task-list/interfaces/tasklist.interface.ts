import { Document } from 'mongoose';
export interface ITaskList extends Document {
    readonly  name: String;
    readonly  description: String;
    readonly  status: String;
    readonly  milestoneId: String;
    readonly  companyId: String;
    readonly  dateCreated: String;
}
