import {ApiProperty} from "@nestjs/swagger"
import {NoteBookDto} from "../dto/note-book.dto"
import {EventCreatorDto} from '../../common/dto/event-creator.dto'
export class CreateNoteBookDto{
    @ApiProperty()
       eventCreator: EventCreatorDto
       @ApiProperty()
       notebook: NoteBookDto
}
