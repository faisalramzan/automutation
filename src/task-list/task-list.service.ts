import { Injectable } from '@nestjs/common';
import { ProjectRepository } from '../repository/project.repository.service';
import { TaskListRepository } from '../repository/task-list.repository.service';
import { UserRepository } from '../repository/user.repository.service';
import { ProjectGetApi } from '../team-work-api/project.get-api';
import { CompleteTaskListDto } from './dto/complete-tasklist.dto';
import { CreateTaskListDto } from './dto/create-tasklist.dto';
import { DeleteTaskListDto } from './dto/delete-tasklist.dto';
import { ReopenTaskListDto } from './dto/reopen-tasklist.dto';
import { UpdateTaskListDto } from './dto/update-tasklist.dto';

@Injectable()
export class TaskListService {
  constructor(
    private readonly taskListRepository: TaskListRepository,
    private readonly projectGetApi: ProjectGetApi,
  ) {}

  async create(creatTaskListDto: CreateTaskListDto): Promise<any> {
    const { taskList } = creatTaskListDto;

    const projectInfo = await this.projectGetApi.getProject(
      Number(taskList.projectId),
    );
    taskList['project'] = projectInfo['_id'];
    return this.taskListRepository.create(taskList);
  }

  async findAll(): Promise<any> {
    return await this.taskListRepository.find();
  }
  async update(updateTaskListDto: UpdateTaskListDto): Promise<any> {
    const { taskList } = updateTaskListDto;
    const projectInfo = await this.projectGetApi.getProject(
      Number(taskList.projectId),
    );
    taskList['project'] = projectInfo['_id'];
    return this.taskListRepository.findOneAndUpdate(
      { id: taskList.id },
      taskList,
      { new: true },
    );
  }

  async delete(deleteTaskListDto: DeleteTaskListDto): Promise<any> {
    const { taskList } = deleteTaskListDto;
    return this.taskListRepository.findOneAndUpdate(
      { id: taskList.id },
      {
        $set: {
          status: 'delete',
        },
      },
    );
  }
  async reopen(reopenTaskListDto: ReopenTaskListDto): Promise<any> {
    const { taskList } = reopenTaskListDto;
    const projectInfo = await this.projectGetApi.getProject(
      Number(taskList.projectId),
    );

    taskList['project'] = projectInfo['_id'];
    return this.taskListRepository.findOneAndUpdate(
      { id: taskList.id },
      {
        $set: {
          status: 'reopen',
          eventCreator: taskList['eventCreator'],
          project: taskList['project'],
        },
      },
      { new: true },
    );
  }
  async complete(completeTaskListDto: CompleteTaskListDto): Promise<any> {
    const { taskList } = completeTaskListDto;
    const projectInfo = await this.projectGetApi.getProject(
      Number(taskList.projectId),
    );
    taskList['project'] = projectInfo['_id'];
    return this.taskListRepository.findOneAndUpdate(
      { id: taskList.id },
      {
        $set: {
          status: 'complete',
          eventCreator: taskList['eventCreator'],
          project: taskList['project'],
        },
      },
      { new: true },
    );
  }
}
