import { ApiProperty } from '@nestjs/swagger';

export class ColumnDto {
  @ApiProperty()
  id:Number;
  @ApiProperty()
  name: String;
  @ApiProperty()
  color: String;
  @ApiProperty()
  status: String;
  @ApiProperty()
  dateCreated: String;
  @ApiProperty()
  dateUpdated: String;

}
