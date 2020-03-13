import { ApiProperty } from '@nestjs/swagger';
import { EventCreatorDto } from '../../common/dto/event-creator.dto';
import { TaskListDto } from './tasklist.dto';
export class StatusDto {
  @ApiProperty()
  id: Number;
  @ApiProperty()
  status: String;
}
