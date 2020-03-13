import { Controller, Post, Get, Put, Delete, Body, HttpCode } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskService } from './task.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Task')
@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}
  @Get('/')
  async findAll(): Promise<any> {
    return await this.taskService.findAll();
  }

  @Post('/create')
  @HttpCode(200)
  async create(@Body() createTaskDto: CreateTaskDto): Promise<any> {
    return await this.taskService.create(createTaskDto);
  }

  @Post('/delete')
   @HttpCode(200)
  async delete(@Body() createTaskDto: CreateTaskDto): Promise<any> {
    return await this.taskService.delete(createTaskDto);
  }

  @Post('/update')
  @HttpCode(200)
  async update(@Body() createTaskDto: CreateTaskDto): Promise<any> {
    return await this.taskService.update(createTaskDto);
  }

  @Post('/reopen')
  @HttpCode(200)
  async reopen(@Body() createTaskDto: CreateTaskDto): Promise<any> {
    return await this.taskService.reopen(createTaskDto);
  }

  @Post('/complete')
  @HttpCode(200)
  async complete(@Body() createTaskDto: CreateTaskDto): Promise<any> {
    return await this.taskService.complete(createTaskDto);
  }

}
