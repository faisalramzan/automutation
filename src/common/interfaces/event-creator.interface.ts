import { Document } from 'mongoose';

export interface IEventCreator extends Document {
    readonly  firstname: String;
    readonly  lastname: String;
    readonly  avatar: String;
    
}
