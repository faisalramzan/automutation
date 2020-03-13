import { Injectable } from '@nestjs/common';
import { TW_API } from '../common/teamwork-api/tw-config';
import { plainToClass } from 'class-transformer';
import { UserRepository } from '../repository/user.repository.service';
import { CompanyGetApi } from '../team-work-api/company.get-api';
import { ProjectRepository } from '../repository/project.repository.service';
import { ProjectApi } from '../common/transformers/project-api.transformer';
import { EventCreatorGetApi } from './event-creator.get-api';
@Injectable()
export class ProjectGetApi {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly companyGetApi: CompanyGetApi,
    private readonly projectRepository: ProjectRepository,
    private readonly eventCreatorGetApi: EventCreatorGetApi,
  ) {}

  async getProject(projectId: number) {
    if (projectId) {
      const projectInfo = await this.projectRepository.findOne({
        id: projectId,
      });
      if (projectInfo !== null) {
        return projectInfo['_id'];
      } else {
        ///id form teamwork and create ind db
        const projectDetail = await TW_API.projects.get({}, projectId);

        const { STATUS, project } = projectDetail;

        if (STATUS === 'OK') {
          project.eventCreator = await this.eventCreatorGetApi.getCurrentLoginUser()
          project.companyId = project.company.id;
          const newProject = plainToClass(ProjectApi, project, {
            strategy: 'excludeAll',
          });

          const mongooCompanyId = await this.companyGetApi.getCompany(
            Number(newProject['companyId']),
          );
           newProject['company']=mongooCompanyId
          const mongooProjectInfo = await this.projectRepository.create(
            newProject,
          );
          return mongooProjectInfo['_id'];
        }
      }
    }
  }
}
