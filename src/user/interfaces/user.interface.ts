import { Document } from 'mongoose';
export interface IUser extends Document {
  readonly email: String;
  readonly firstname: String;
  readonly lastname: String;
  readonly avatar: String;
  readonly type: String;
  readonly companyId: String;
  readonly dateCreated: String;
  readonly dateUpdated: String;
}
