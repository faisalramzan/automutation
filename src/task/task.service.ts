import { Injectable } from '@nestjs/common';
import { TaskRepository } from '../repository/task.repository.service';
import { UserRepository } from '../repository/user.repository.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskListRepository } from '../repository/task-list.repository.service';
import { ProjectRepository } from '../repository/project.repository.service';
import { TaskListGetApi } from '../team-work-api/tasklist.get-api';
import { ProjectGetApi } from '../team-work-api/project.get-api';
@Injectable()
export class TaskService {
  constructor(
    private readonly taskListRepository: TaskListRepository,
    private readonly userRepository: UserRepository,
    private readonly taskRepository: TaskRepository,
    private readonly projectRepository: ProjectRepository,
    private readonly taskListGetApi: TaskListGetApi,
    private readonly projectGetApi: ProjectGetApi,
  ) {}
  async create(createTaskDto: CreateTaskDto): Promise<any> {
    const { taskList, task } = createTaskDto;
    const tasklistinfo = await this.taskListGetApi.getTaskList(
      Number(taskList.id),
      taskList,
    );
    const projectInfo = await this.projectGetApi.getProject(
      Number(task['projectId']),
    );
    task['project'] = projectInfo['_id'];
    task['taskList'] = tasklistinfo['_id'];
    return this.taskRepository.create(task);
  }
  async findAll(): Promise<any> {
    return await this.taskRepository.find();
  }
  async update(createTaskDto: CreateTaskDto): Promise<any> {
    const { eventCreator, taskList, task } = createTaskDto;
    const newUser = await this.userRepository.findOrCreate(eventCreator);
    taskList['eventCreator'] = newUser['_id'];
    const newTaskList = await this.taskListRepository.findOrCreate(taskList);
    //// finding the project mongoose id  ///
    const projectInfo = await this.projectRepository.findOne({
      id: task['projectId'],
    });
    task['project'] = projectInfo['_id'];
    task['eventCreator'] = taskList['eventCreator'];
    task['taskList'] = newTaskList['_id'];
    return this.taskRepository.findOneAndUpdate({ id: task.id }, task, {
      new: true,
    });
  }
  async delete(createTaskDto: CreateTaskDto): Promise<any> {
    const { eventCreator, taskList, task } = createTaskDto;
    const newUser = await this.userRepository.findOrCreate(eventCreator);
    taskList['eventCreator'] = newUser['_id'];
    const newTaskList = await this.taskListRepository.findOrCreate(taskList);
    //// finding the project mongoose id  ///
    const projectInfo = await this.projectRepository.findOne({
      id: task['projectId'],
    });
    task['project'] = projectInfo['_id'];
    task['eventCreator'] = newUser['_id'];
    task['taskList'] = newTaskList['_id'];

    return this.taskRepository.findOneAndUpdate(
      { id: task.id },
      {
        $set: {
          status: task.status,
          taskList: newTaskList['_id'],
          eventCreator: task['eventCreator'],
          project: task['project'],
        },
      },
      { new: true },
    );
  }
  async reopen(createTaskDto: CreateTaskDto): Promise<any> {
    const { eventCreator, taskList, task } = createTaskDto;
    const newUser = await this.userRepository.findOrCreate(eventCreator);
    taskList['eventCreator'] = newUser['_id'];
    const newTaskList = await this.taskListRepository.findOrCreate(taskList);
    //// finding the project mongoose id  ///
    const projectInfo = await this.projectRepository.findOne({
      id: task['projectId'],
    });
    task['project'] = projectInfo['_id'];
    task['eventCreator'] = newUser['_id'];
    task['taskList'] = newTaskList['_id'];

    return this.taskRepository.findOneAndUpdate(
      { id: task.id },
      {
        $set: {
          status: task.status,
          taskList: newTaskList['_id'],
          eventCreator: task['eventCreator'],
          project: task['project'],
        },
      },
      { new: true },
    );
  }
  async complete(createTaskDto: CreateTaskDto): Promise<any> {
    const { eventCreator, taskList, task } = createTaskDto;
    const newUser = await this.userRepository.findOrCreate(eventCreator);
    taskList['eventCreator'] = newUser['_id'];
    const newTaskList = await this.taskListRepository.findOrCreate(taskList);
    const projectInfo = await this.projectRepository.findOne({
      id: task['projectId'],
    });
    task['project'] = projectInfo['_id'];
    task['eventCreator'] = newUser['_id'];
    task['taskList'] = newTaskList['_id'];

    return this.taskRepository.findOneAndUpdate(
      { id: task.id },
      {
        $set: {
          status: task.status,
          taskList: newTaskList['_id'],
          eventCreator: task['eventCreator'],
          project: task['project'],
        },
      },
      { new: true },
    );
  }
}
