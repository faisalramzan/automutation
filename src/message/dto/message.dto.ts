import { ApiProperty } from '@nestjs/swagger';
import { TageDto } from '../../common/dto/tage.dto';
import { PostDto } from '../../common/dto/post.dto';
export class MessageDto {
  @ApiProperty()
  id: Number;
  @ApiProperty()
  subject: String;
  @ApiProperty()
  status: String;
  @ApiProperty()
  categoryId: String;
  @ApiProperty()
  projectId: Number;
  @ApiProperty()
  // tage:[TageDto ];
  @ApiProperty()
  post: PostDto;
}
