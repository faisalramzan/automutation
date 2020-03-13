import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  @ApiProperty()
  id: Number;
  @ApiProperty()
  email: String;
  @ApiProperty()
  firstName: String;
  @ApiProperty()
  lastName: String;
  @ApiProperty()
  avatar: String;
  @ApiProperty()
  type: String;
  @ApiProperty()
  companyId: String;
  @ApiProperty()
  dateCreated: String;
  @ApiProperty()
  dateUpdated: String;
}
