import { Injectable } from '@nestjs/common';
import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
@Injectable()
export class TaskListRepository {
  constructor(
    @InjectModel('TaskList') private readonly taskListModel: Model<any>,
  ) {}
  create(tasklistDetails: any): Promise<any> {
    const taskList = this.taskListModel(tasklistDetails);
    return taskList.save();
  }
  find(): Promise<any> {
    return this.taskListModel.find({});
  }
  findOne(query: any, projection = {}) {
    return this.taskListModel.findOne(query, projection);
  }
  async findOrCreate(tasklistDetails: any): Promise<any> {
    const taskListInfo = await this.findOne({ id: tasklistDetails.id });
    if (taskListInfo !== null) {
      return taskListInfo;
    } else {
      return await this.create(tasklistDetails);
    }
  }
  findOneAndUpdate(
    query: any,
    tasklistDetails: any,
    options = {},
  ): Promise<any> {
    return this.taskListModel.findOneAndUpdate(query, tasklistDetails, options);
  }
}
