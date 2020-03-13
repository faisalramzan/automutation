import {ApiProperty} from "@nestjs/swagger";

export class LinkDto {
    @ApiProperty()
    id:Number;
    @ApiProperty()
    title: String;
    @ApiProperty()
    description: String;
    @ApiProperty()
    code: String;
    @ApiProperty()
    width: String;
    @ApiProperty()
    height: String;
    @ApiProperty()
    tage:[];
    @ApiProperty()
    categoryId: String;
    @ApiProperty()
    projectId: String;
    @ApiProperty()
    dateCreated: String;
    @ApiProperty()
    dateUpdated: String;
}