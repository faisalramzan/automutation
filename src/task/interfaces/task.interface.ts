import { Document } from 'mongoose';
export interface ITask extends Document {
    readonly  name: String;
    readonly  priority: String;
    readonly  status: String;
    readonly  parentId: String;
    readonly  taskListId: String;
    readonly  dueDate: String;
    readonly  projectId: String;
    readonly  dateCreated: String;
    readonly  dateUpdated: String;
    readonly  startDate: String;
}




