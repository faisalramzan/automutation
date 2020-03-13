import { Document } from 'mongoose';

export interface IPost extends Document {
    readonly  body: String;
    readonly  status: String;
    readonly  dateCreated: String;
    readonly  userId: String;
    readonly  messageId: String;
    readonly  dateUpdated: String;
   

}
