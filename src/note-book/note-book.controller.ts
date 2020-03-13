import { Controller ,Get,Post,Body,Delete,Put} from '@nestjs/common';
import {NoteBookService} from "./note-book.service"
import {CreateNoteBookDto} from './dto/create-note-book.dto'
@Controller('note-book')
export class NoteBookController {
    constructor (private readonly noteBookServices: NoteBookService ){}
    @Post('/create')
    create(@Body()  createNoteBookDto:  CreateNoteBookDto): CreateNoteBookDto{
        return this.noteBookServices.create(createNoteBookDto);
    }
    @Delete('/delete')
    delete(): any{
        return this.noteBookServices.delete();
    }
    @Put('/update')
    update(@Body()  createNoteBookDto:  CreateNoteBookDto): CreateNoteBookDto{
        return this.noteBookServices.update(createNoteBookDto);
    }
    @Get('/tagg')
    tagg(): any {
        return this.noteBookServices.tagg();
    }
    @Get('/unTagg')
    unTagg(): any {
        return this.noteBookServices.unTagg();
    }
}
