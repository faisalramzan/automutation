import {ColumnDto} from "../dto/column.dto"
import {EventCreatorDto} from "../../common/dto/event-creator.dto"
import {ApiProperty} from "@nestjs/swagger"
export class CreateColumnDto {
    @ApiProperty()
    eventCreator: EventCreatorDto;
    @ApiProperty()
    column: ColumnDto;
}