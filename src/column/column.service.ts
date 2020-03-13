import { Injectable } from '@nestjs/common';
import { handleRetry } from '@nestjs/mongoose/dist/common/mongoose.utils';

@Injectable()
export class ColumnService {
    create(createColumnDto): any {
        return 'here';
    }
    update(createColumnDto): any {
        return 'Here is  ';
    }
    delete(): any {
        return 'Here ';
    }
}

