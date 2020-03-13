import { Controller,Post,Get ,Put,Delete,Body } from '@nestjs/common';
import {LinkService}  from "./link.service";
 import {CreateLinkDto} from "./dto/create-link.dto"
@Controller('link')
export class LinkController {

    constructor(private readonly linkService: LinkService) {}
    @Post('/create')
    create(@Body()  createLinkDto:  CreateLinkDto): CreateLinkDto{
        return this.linkService.create(createLinkDto);
    }
    @Delete('/delete')
    delete(): any{
        return this.linkService.delete();
    }
    @Put('/update')
    update(@Body()  createLinkDto:  CreateLinkDto): CreateLinkDto{
        return this.linkService.update(createLinkDto);
    }
    @Get('/tagg')
    tagg(): any {
        return this.linkService.tagg();
    }
    @Get('/unTagg')
    unTagg(): any {
        return this.linkService.unTagg();
    }
}
