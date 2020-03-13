import { Controller, Post, Get, Put, Delete, Body, HttpCode } from '@nestjs/common';
import { TaskListService } from './task-list.service';
import { CreateTaskListDto } from './dto/create-tasklist.dto';
import { CreateStatusDto } from './dto/create-status.dto';
import { ApiTags } from '@nestjs/swagger';
import { from } from 'rxjs';
import { UpdateTaskListDto } from './dto/update-tasklist.dto';
import { DeleteTaskListDto } from './dto/delete-tasklist.dto';
import { ReopenTaskListDto } from './dto/reopen-tasklist.dto';
import { CompleteTaskListDto } from './dto/complete-tasklist.dto';
@ApiTags('TasList')
@Controller('tasklist')
export class TaskListController {
  constructor(private readonly taskListService: TaskListService) {}

  @Get('/')
  @HttpCode(200)
  async findAll(): Promise<any> {
    return this.taskListService.findAll();
  }
  @Post('/create')
  @HttpCode(200)
  async create(@Body() creatTaskListDto: CreateTaskListDto): Promise<any> {
    return this.taskListService.create(creatTaskListDto);
  }

  @Post('/update')
  @HttpCode(200)
  async update(@Body() UpdateTaskListDto: UpdateTaskListDto): Promise<any> {
    return this.taskListService.update(UpdateTaskListDto);
  }

  @Post('/delete')
  @HttpCode(200)
  async delete(@Body() deleteTaskListDto: DeleteTaskListDto): Promise<any> {
    return await this.taskListService.delete(deleteTaskListDto);
  }

  @Post('/reopen')
  async reopen(@Body() reopenTaskListDto: ReopenTaskListDto): Promise<any> {
    return await this.taskListService.reopen(reopenTaskListDto);
  }
  @Post('/complete')
  async complete(@Body() completeTaskListDto: CompleteTaskListDto): Promise<any> {
    return this.taskListService.complete(completeTaskListDto);
  }
}
