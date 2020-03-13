import{ApiProperty} from "@nestjs/swagger";
import {CompanyDto}  from "./company.dto";
import {EventCreatorDto} from '../../common/dto/event-creator.dto'
export class CreateCompanyDto{

   @ApiProperty()
    eventCreator:  EventCreatorDto
    @ApiProperty()
     company: CompanyDto
}