import { MessageDto } from '../dto/message.dto';
import { EventCreatorDto } from '../../common/dto/event-creator.dto';
import { ApiProperty } from '@nestjs/swagger';
export class CreateMessageDto {
  @ApiProperty()
  eventCreator: EventCreatorDto;
  @ApiProperty()
  message: MessageDto;
}
