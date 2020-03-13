import { Injectable } from '@nestjs/common';
import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { IProject } from '../project/interfaces/project.interface';
@Injectable()
export class ProjectRepository {
  constructor(
    @InjectModel('Project') private readonly projectModel: Model<any>,
  ) {}
  create(projectDetail: any): Promise<any> {
    const project = this.projectModel(projectDetail);
    return project.save();
  }
  find(): Promise<any> {
    return this.projectModel.find({});
  }
  findOne(query: any ): Promise<any> {
    return this.projectModel.findOne(query);
  }
  async findOrCreate(projectDetail: any): Promise<any> {
    const userInfo = await this.findOne({id: projectDetail.id });
    if (userInfo !== null) {
      return userInfo;
    } else {
      return await this.create(projectDetail);
    }
  }
  
  findOneAndUpdate(query: any, projectDetail: any, options = {}): Promise<any> {
    return this.projectModel.findOneAndUpdate(query, projectDetail, options);
  }
}
