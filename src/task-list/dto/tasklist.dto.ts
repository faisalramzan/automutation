import { ApiProperty } from '@nestjs/swagger';
export class TaskListDto {
  @ApiProperty()
  id: Number;
  @ApiProperty()
  name: String;
  @ApiProperty()
  description: String;
  @ApiProperty()
  status: String;
  @ApiProperty()
  milestoneId: String;
  @ApiProperty()
  projectId: Number;
  @ApiProperty()
  tags: [];
}
