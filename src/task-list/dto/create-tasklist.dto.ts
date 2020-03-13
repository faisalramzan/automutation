import { ApiProperty } from '@nestjs/swagger';
import { EventCreatorDto } from '../../common/dto/event-creator.dto';
import { TaskListDto } from './tasklist.dto';
export class CreateTaskListDto {
  @ApiProperty()
  eventCreator: EventCreatorDto;
  @ApiProperty()
  taskList: TaskListDto;
}
