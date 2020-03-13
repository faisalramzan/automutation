import{ApiProperty} from '@nestjs/swagger'
export class CompanyDto {
    @ApiProperty()
    id:Number;
    @ApiProperty()
    name: String;
    @ApiProperty()
    website: String;
    @ApiProperty()
    phone: String;
    @ApiProperty()
    fax: String;
    @ApiProperty()
    addressLine1: String;
    @ApiProperty()
    addressLine2: String;
    @ApiProperty()
    city: String;
    @ApiProperty()
    state: String;
    @ApiProperty()
    zip: String;
    @ApiProperty()
    countryCode:String;
    @ApiProperty()
    email:String;
    @ApiProperty()
    secondaryEmail:String;
    @ApiProperty()
    tertiaryEmail:String;
    @ApiProperty()
    logo:String
}