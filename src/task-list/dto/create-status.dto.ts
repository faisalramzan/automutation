import { ApiProperty } from '@nestjs/swagger';
import { EventCreatorDto } from '../../common/dto/event-creator.dto';
import { StatusDto } from './status.dto';
export class CreateStatusDto {
  @ApiProperty()
  eventCreator: EventCreatorDto;
  @ApiProperty()
  taskList: StatusDto;
}
