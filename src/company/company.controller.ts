import { Controller,Post,Delete,Put,Body, HttpCode} from '@nestjs/common';
import {CompanyService} from './company.service';
import {CreateCompanyDto}from './dto/create-company.dto'
import { ApiTags } from '@nestjs/swagger';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { DeleteCompanyDto } from './dto/delete-company.dto';
 @ApiTags('Company')
@Controller('company')
export class CompanyController {
    constructor(private readonly companyService: CompanyService) {}

    @Post('/create')
    @HttpCode(200)
     async create(@Body()createCompanyDto :CreateCompanyDto):Promise<any>{
        return await this.companyService.create(createCompanyDto);
    }
    
    @Post('/delete')
    @HttpCode(200)
    async delete(@Body()deleteCompanyDto :DeleteCompanyDto):Promise<any>{
        return await  this.companyService.delete(deleteCompanyDto);
    }

    @Post('/update')
    @HttpCode(200)
    async update(@Body()updateCompanyDto :UpdateCompanyDto):Promise<any>{
        return await  this.companyService.update(updateCompanyDto);
    }
}
