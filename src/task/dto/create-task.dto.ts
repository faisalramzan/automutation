import { ApiProperty } from '@nestjs/swagger';
import { EventCreatorDto } from '../../common/dto/event-creator.dto';
import { TaskDto } from './task.dto';
import { TaskListDto } from '../../task-list/dto/tasklist.dto';
export class CreateTaskDto {
  @ApiProperty()
  eventCreator: EventCreatorDto;
  @ApiProperty()
  task: TaskDto;
  @ApiProperty()
  taskList: TaskListDto;
}
