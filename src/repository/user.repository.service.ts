import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
@Injectable()
export class UserRepository {
  constructor(@InjectModel('User') private readonly userModel: Model<any>) {}
  find(): Promise<any> {
    return this.userModel.find({});
  }
  create(userDetail: any): Promise<any> {
    const user = this.userModel(userDetail);
    return user.save();
  }
  findOne(query: any) {
    return this.userModel.findOne(query);
  }

  async findOrCreate(userDetail: any): Promise<any> {
    const userInfo = await this.findOne({ id: userDetail.id });
    if (userInfo !== null) {
      return userInfo;
    } else {
      return await this.create(userDetail);
    }
  }
  findOneAndUpdate(query: any, userDetail: any, options = {}): Promise<any> {
    return this.userModel.findOneAndUpdate(query, userDetail, options);
  }
}
