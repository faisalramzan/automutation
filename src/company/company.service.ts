import { Injectable } from '@nestjs/common';
import { CompanyRepository } from '../repository/company.repository.service';
import { EventCreatorGetApi } from '../team-work-api/event-creator.get-api';
import { CreateCompanyDto } from './dto/create-company.dto';
import { DeleteCompanyDto } from './dto/delete-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
@Injectable()
export class CompanyService {
  constructor(
    private readonly eventCreatorGetApi: EventCreatorGetApi,
    private readonly companyRepository: CompanyRepository,
  ) {}
  async create(createCompanyDto: CreateCompanyDto): Promise<any> {
    const { company } = createCompanyDto;
    const Userid = this.eventCreatorGetApi.getCurrentLoginUser();
    company['eventCreator'] = Userid['_id'];
    return this.companyRepository.create(company);
  }
  async findAll(): Promise<any> {
    return await this.companyRepository.find();
  }

  async update(updateCompanyDto: UpdateCompanyDto): Promise<any> {
    const { company } = updateCompanyDto;
    const Userid = this.eventCreatorGetApi.getCurrentLoginUser();
    company['eventCreator'] = Userid['_id'];
    return this.companyRepository.findOneAndUpdate(
      { id: company.id },
      company,
      {
        new: true,
      },
    );
  }
  async delete(deleteCompanyDto: DeleteCompanyDto): Promise<any> {
    const { company } = deleteCompanyDto;
    const Userid = this.eventCreatorGetApi.getCurrentLoginUser();
    company['eventCreator'] = Userid;
    return this.companyRepository.findOneAndUpdate(
      { id: company.id },
      { $set: { status: 'delete', eventCreator: company['eventCreator'] } },
      { new: true },
    );
  }
}
