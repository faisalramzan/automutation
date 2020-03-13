import { ApiProperty } from '@nestjs/swagger';
import {PostDto} from "../../common/dto/post.dto"
import { EventCreatorDto } from '../../common/dto/event-creator.dto';
export class CreateMessageReplyDto {
    @ApiProperty()
    eventCreator: EventCreatorDto;
    @ApiProperty()
    messagePost:PostDto;

}