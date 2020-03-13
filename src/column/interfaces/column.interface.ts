import { Document } from 'mongoose';

export interface IColumn extends Document {
    readonly  name: String;
    readonly  status: String;
    readonly  color: String;
    readonly  dateCreated: String;
    readonly  dateUpdated: String;
}
