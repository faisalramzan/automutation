import { Document } from 'mongoose';

export interface ITage extends Document{
  readonly name: String;
  readonly color: String;
}
