import {ApiProperty} from "@nestjs/swagger"
import {EventCreatorDto} from "../../common/dto/event-creator.dto"
import {LinkDto} from "./link.dto"
export class CreateLinkDto{
    @ApiProperty()
    eventCreator: EventCreatorDto;
    @ApiProperty()
    link: LinkDto;

}