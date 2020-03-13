import { Injectable } from '@nestjs/common';
import { CompanyRepository } from '../repository/company.repository.service';
import { TW_API } from '../common/teamwork-api/tw-config';
import { plainToClass } from 'class-transformer';
import { CompanyApi } from '../common/transformers/company-api.transformer';
import { EventCreatorGetApi } from './event-creator.get-api';


@Injectable()
export class CompanyGetApi {
  constructor(
    private readonly companyRepository: CompanyRepository,
    private readonly eventCreatorGetApi: EventCreatorGetApi
  ) {}
  async  getCompany(companyId: number) {
    if (companyId) {
      const companyInfo = await this.companyRepository.findOne({
        id: companyId,
      });
      if (companyInfo !== null) {
        return companyInfo['_id'];
      } else {
        //// geting data form TeamWork
        const companyDetail = await TW_API.companies.get(companyId);
        const { STATUS, company } = companyDetail;

        if (STATUS === 'OK') {
          // here we are mapping the response and schema of company
        const eventCreator = await this.eventCreatorGetApi. getCurrentLoginUser();
        company.eventCreator = eventCreator;
        const newCompany = plainToClass(CompanyApi, company, {
          strategy: 'excludeAll',
        });

        const mongooCompanyInfo = await this.companyRepository.create(
          newCompany,
        );
        return mongooCompanyInfo['_id'];
        }
        
      }
    }
  }
  
}
