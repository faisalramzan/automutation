import { ApiProperty } from '@nestjs/swagger';

export class PostDto {
  @ApiProperty()
  id:Number;
  @ApiProperty()
  body: String;
  @ApiProperty()
  status: String;
  @ApiProperty()
  dateCreated: String;
  @ApiProperty()
  userId:Number;
  @ApiProperty()
  messageId: Number;
  @ApiProperty()
  dateUpdated: String;

  
   
}