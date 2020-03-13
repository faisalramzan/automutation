import { Injectable } from '@nestjs/common';
import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
@Injectable()
export class TaskRepository {
  constructor(@InjectModel('Task') private readonly taskModel: Model<any>) {}
  create(taskDetails: any): Promise<any> {
    const taskList = this.taskModel(taskDetails);
    return taskList.save();
  }
  find(): Promise<any> {
    return this.taskModel.find({}).populate('taskList');
  }
  findOne(query: any) {
    return this.taskModel.findOne(query);
  }
  async findOrCreate(taskDetails: any): Promise<any> {
    const taskInfo = await this.findOne({ id: taskDetails.id });
    if (taskInfo !== null) {
      return taskInfo;
    } else {
      return await this.create(taskDetails);
    }
  }
  findOneAndUpdate(query: any, taskDetails: any, options = {}): Promise<any> {
    return this.taskModel.findOneAndUpdate(query, taskDetails, options);
  }
}
