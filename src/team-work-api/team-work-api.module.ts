import { Module } from '@nestjs/common';
import {CompanyGetApi } from './company.get-api'
import{RepositoryModule} from '../repository/repository.module'
import { EventCreatorGetApi } from './event-creator.get-api';
import { ProjectGetApi } from './project.get-api';
import { TaskListGetApi } from './tasklist.get-api';
@Module({
  imports:[RepositoryModule],
  providers: [CompanyGetApi,EventCreatorGetApi,ProjectGetApi,TaskListGetApi],
  exports: [
    CompanyGetApi,EventCreatorGetApi,ProjectGetApi,TaskListGetApi
  ],
})
export class TeamWorkApiModule {}
