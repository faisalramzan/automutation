import { ApiProperty } from '@nestjs/swagger';
import {EventCreatorDto} from  '../../common/dto/event-creator.dto';


export class CompleteDto {

      @ApiProperty()
        id:Number;
        @ApiProperty()
        dateCreated: String;
        @ApiProperty()
        status: String;
   
   

}