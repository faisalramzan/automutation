import { ApiProperty } from '@nestjs/swagger';

export class EventCreatorDto {
  @ApiProperty()
  id:Number;
  @ApiProperty()
  firstName: String;
  @ApiProperty()
  lastName: String;
  @ApiProperty()
  avatar: String;
}