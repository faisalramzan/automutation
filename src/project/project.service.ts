import { Injectable } from '@nestjs/common';
import { ProjectRepository } from '../repository/project.repository.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDTO } from './dto/update-project.dto';
import { CompleteProjectDTO } from './dto/complete-project.dto';
import { ReopenProjectDTO } from './dto/reopen-project.dto';
import { DeleteProjectDTO } from './dto/delete-project.dto';
import {CompanyGetApi} from '../team-work-api/company.get-api'
@Injectable()
export class ProjectService {
  constructor(
    private readonly projectRepository: ProjectRepository,
    private readonly  CompanyGetApi: CompanyGetApi
  ) {}
  async create(createProjectDto: CreateProjectDto): Promise<any> {
    const { project} = createProjectDto ;
  /// find company form comapny module and seeting mogooose id in project schema
    const companyInfo= await this.CompanyGetApi.getCompany(Number(project.companyId));

     project['company'] = companyInfo['_id']
     return this.projectRepository.create(project);
  }

  async findAll(): Promise<any> {
    return this.projectRepository.find();
  }

  async complete(completeProjectDTO: CompleteProjectDTO): Promise<any> {
    const { project } = completeProjectDTO;
    // getting the  company from teamwork
    const companyInfo = await this.CompanyGetApi.getCompany(Number(project.companyId));
    project['company'] = companyInfo['_id']
    return this.projectRepository.findOneAndUpdate(
      { id: project.id },
      { $set: { status: 'completed', company: project['company'] } },{new:true ,upsert: true}
      );
    }
    async reopen(reopenProjectDTO: ReopenProjectDTO): Promise<any> {
      const {project } = reopenProjectDTO;
      
      // getting the  company from teamwork
    const companyInfo= await this.CompanyGetApi.getCompany(Number(project.companyId));
    project['company'] = companyInfo['_id']
     return this.projectRepository.findOneAndUpdate(
      { id: project.id },
      { $set: { status: 'reopen' , company: project['company']} },{new:true}
    );
  }
  async delete(deleteProjectDTO: DeleteProjectDTO): Promise<any> {
    const { project } = deleteProjectDTO;
          // getting the  company from teamwork
    const companyInfo= await this.CompanyGetApi.getCompany(Number(project.companyId));
    project['company'] = companyInfo['_id']
    return this.projectRepository.findOneAndUpdate(
     { id: project.id },
     { $set: { status: 'delete' , company: project['company']} },{new:true}
   );
  }
  async update(updateProjectDTO: UpdateProjectDTO): Promise<any> {
    const { project } = updateProjectDTO;
          // getting the  company from teamwork
    const company= await this.CompanyGetApi.getCompany(Number(project.companyId));
    project['company'] = company['_id'];
    return this.projectRepository.findOneAndUpdate({ id: project.id }, project, { new: true, upsert: true });
  }
  
  
  }
  


