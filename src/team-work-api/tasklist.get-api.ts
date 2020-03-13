import { Injectable } from '@nestjs/common';
import { TaskListRepository } from '../repository/task-list.repository.service';
import { ProjectGetApi } from './project.get-api';
import { EventCreatorGetApi } from './event-creator.get-api';
@Injectable()
export class TaskListGetApi {
  constructor(
    private readonly projectGetApi: ProjectGetApi,
    private readonly taskListRepository: TaskListRepository,
    private readonly eventCreatorGetApi: EventCreatorGetApi
  ) {}
  async getTaskList(taskListId: number, tasklist: any) {
    if (taskListId) {
      const taskListInfo = await this.taskListRepository.findOne(
        {
          id: taskListId,
        },
        { _id: 1 },
      );
      if (taskListInfo !== null) {
        return taskListInfo['_id'];
      } else {
        const mongoProjectInfo = await this.projectGetApi.getProject(
          tasklist['projectId'],
        );
        tasklist.eventCreator = await this.eventCreatorGetApi.getCurrentLoginUser()
        tasklist['project'] = mongoProjectInfo['_id'];
        const taskListInfo = await this.taskListRepository.create(tasklist);
        return taskListInfo['_id'];
      }
    }
  }
}
