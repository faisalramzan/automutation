import { ApiProperty } from '@nestjs/swagger';
import {ProjectDto} from  './project.dto';
import {EventCreatorDto} from  '../../common/dto/event-creator.dto';
export class CreateProjectDto {
    @ApiProperty()
    eventCreator: EventCreatorDto;
    @ApiProperty()
    project: ProjectDto;

}