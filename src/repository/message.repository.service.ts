import { Injectable } from '@nestjs/common';
import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
@Injectable()
export class MessageRepository {
  constructor(
    @InjectModel('Message') private readonly messageModel: Model<any>,
  ) {}
  create(messageDetails: any): Promise<any> {
    const message = this.messageModel(messageDetails);
    return message.save();
  }
  find(): Promise<any> {
    return this.messageModel.find({});
  }
  findOne(query: any, projection = {}) {
    return this.messageModel.findOne(query, projection);
  }
  async findOrCreate(messageDetails: any): Promise<any> {
    const messageInfo = await this.findOne({ id: messageDetails.id });
    if (messageInfo !== null) {
      return messageInfo;
    } else {
      return await this.create(messageDetails);
    }
  }
  findOneAndUpdate(
    query: any,
    messageDetails: any,
    options = {},
  ): Promise<any> {
    return this.messageModel.findOneAndUpdate(query, messageDetails, options);
  }
}
