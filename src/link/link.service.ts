import { Injectable } from '@nestjs/common';

@Injectable()
export class LinkService {
  create(createLinkDto): any {
    return 'create';
  }
  update(createLinkDto): any {
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
