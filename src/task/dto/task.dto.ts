import { ApiProperty } from '@nestjs/swagger';
import { TageDto } from '../../common/dto/tage.dto';
export class TaskDto {
  @ApiProperty()
  id: Number;
  @ApiProperty()
  name: String;
  @ApiProperty()
  priority: String;
  @ApiProperty()
  status: String;
  @ApiProperty()
  parentId: String;
  @ApiProperty()
  startDate: String;
  @ApiProperty()
  dueDate: String;
  @ApiProperty()
  tags: [TageDto];
  @ApiProperty()
  projectId: Number;
  @ApiProperty()
  taskListId: Number;
  @ApiProperty()
  dateCreated: String;
  @ApiProperty()
  dateUpdated: String;
}
