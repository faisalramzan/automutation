import { ApiProperty } from '@nestjs/swagger';
export class TageDto {
  @ApiProperty()
  id:Number;
  @ApiProperty()
  name: String;
  @ApiProperty()
  color: String;
  
}