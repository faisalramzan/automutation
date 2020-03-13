
import { Controller,Post,Delete,Put,Body} from '@nestjs/common';
import {ColumnService} from './column.service';
import {CreateColumnDto}from './dto/create-column.dto';
@Controller('column')
export class ColumnController {
    constructor(private readonly columnService: ColumnService) {}

    @Post('/create')
    create(@Body()createColumnDto :CreateColumnDto):CreateColumnDto{
        return this.columnService.create(createColumnDto);
    }
    @Delete('/delete')
    delete(): any{
        return this.columnService.delete();
    }
    @Put('/update')
    update(@Body()createColumnDto :CreateColumnDto):CreateColumnDto{
        return this.columnService.update(createColumnDto);
    }
}
