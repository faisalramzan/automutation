import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

export interface IProject extends Document {
    readonly  name: String;
    readonly  description: String;
    readonly  status: String;
    readonly  startDate: String;
    readonly  endDate: String;
    readonly  companyId: String;
    readonly  tags: [];
    readonly  eventCreator: mongoose.Types.ObjectId;

}
