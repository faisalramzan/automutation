import{ApiProperty} from '@nestjs/swagger'
export class CompanyDto {
    @ApiProperty()
    id:Number;
    @ApiProperty()
    name: String;
}