import { Injectable } from '@nestjs/common';
import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
@Injectable()
export class MessagePostRepository {
  constructor(
    @InjectModel('MessagePost') private readonly postModel: Model<any>,
  ) {}
  create(postDetails: any): Promise<any> {
    const post = this.postModel(postDetails);
    return post.save();
  }
  find(): Promise<any> {
    return this.postModel.find({});
  }
  findOne(query: any, projection = {}) {
    return this.postModel.findOne(query, projection);
  }
  async findOrCreate(postDetails: any): Promise<any> {
    const postInfo = await this.findOne({ id: postDetails.id });
    if (postInfo !== null) {
      return postInfo;
    } else {
      return await this.create(postDetails);
    }
  }
  findOneAndUpdate(query: any, postDetails: any, options = {}): Promise<any> {
    return this.postModel.findOneAndUpdate(query, postDetails, options);
  }
}
