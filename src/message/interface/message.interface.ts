import { Document } from 'mongoose';

export interface IPost extends Document {
  readonly subject: String;
  readonly status: String;
  readonly categoryId: String;
  readonly projectId: String;
  readonly tage: [{}];
  readonly post: {};
}
