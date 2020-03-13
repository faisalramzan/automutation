import {ApiProperty} from "@nestjs/swagger";

export class NoteBookDto {
    @ApiProperty()
    id:Number;
    @ApiProperty()
    name: String;
    @ApiProperty()
    description: String;
    @ApiProperty()
    code: String;
    @ApiProperty()
    tage:[];
    @ApiProperty()
    categoryId: String;
    @ApiProperty()
    projectId: String;
    @ApiProperty()
    dateCreated: String;
    @ApiProperty()
    version: String;
    @ApiProperty()
    versionId: String;

}