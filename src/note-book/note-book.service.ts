import { Injectable } from '@nestjs/common';

@Injectable()
export class NoteBookService {
    create(createNoteBookDto): any {
        return 'create';
      }
      update(createNoteBookDto): any {
        return 'Here is Copy meathod ';
      }
      delete(): any {
        return 'Here is  Delete meathod ';
      }
    
      tagg(): any {
        return 'Here is tagg meathod ';
      }
      unTagg(): any {
        return 'Here is tagg meathod ';
      }
}
