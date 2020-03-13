import * as mongoose from 'mongoose';
import { Expose, Transform, Type } from 'class-transformer';
import { CompanyDto } from 'src/company/dto/company.dto';
export class ProjectApi {
  @Expose()
  id: number;
  @Expose()
  name: String;
  @Expose()
  description: String;
  @Expose()
  status: String;
  @Expose()
  startDate: String;
  @Expose()
  endDate: String;
  @Expose()
  ownerId?: String;
  @Expose()
  companyId: number;
  @Expose({name:'created-on'})
  dateCreated: String;
  @Expose()
  eventCreator: { type: mongoose.Types.ObjectId }


 
}
