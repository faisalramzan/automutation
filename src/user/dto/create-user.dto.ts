import { ApiProperty } from '@nestjs/swagger';
import { UserDto } from '../dto/user.dto';
import { EventCreatorDto } from '../../common/dto/event-creator.dto';

export class CreateUserDto {
  @ApiProperty()
  eventCreator: EventCreatorDto;
  @ApiProperty()
  user: UserDto;
}
