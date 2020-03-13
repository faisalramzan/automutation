import { ApiProperty } from '@nestjs/swagger';
import{TageDto} from '../../common/dto/tage.dto'
export class ProjectDto {
  @ApiProperty()
  id:Number;
  @ApiProperty()
  name: String;
  @ApiProperty()
  description: String;
  @ApiProperty()
  status: String;
  @ApiProperty()
  startDate: String;
  @ApiProperty()
  endDate: String;
  @ApiProperty()   
  tags:[TageDto]
  @ApiProperty()
  companyId: Number;
  @ApiProperty()
  dateCreated: String;
  @ApiProperty()
  ownerId? : Number
}