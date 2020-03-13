import { Injectable } from '@nestjs/common';
import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
@Injectable()
export class CompanyRepository {
  constructor(
    @InjectModel('Company') private readonly companyModel: Model<any>,
  ) {}
  create(companyDetails: any): Promise<any> {
    const company = this.companyModel(companyDetails);
    return company.save();
  }
  find(): Promise<any> {
    return this.companyModel.find({});
  }
  findOne(query: any, projection = {}) {
    return this.companyModel.findOne(query, projection);
  }
  async findOrCreate(companyDetails: any): Promise<any> {
    const companyInfo = await this.findOne({ id: companyDetails.id });
    if (companyInfo !== null) {
      return companyInfo;
    } else {
      return await this.create(companyDetails);
    }
  }
  findOneAndUpdate(query: any, companyDetails: any, options = {}): Promise<any> {
    return this.companyModel.findOneAndUpdate(query, companyDetails, options);
  }
}
