import { Controller, Post, Delete, Put, Body, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get('/')
  async findAll(): Promise<any> {
    return await this.userService.findAll();
  }
  @Post('/create')
  async create(@Body() createUserDto: CreateUserDto): Promise<any> {
    return await this.userService.create(createUserDto);
  }

  @Delete('/delete')
  delete(): any {
    return this.userService.delete();
  }
  @Put('/update')
  async update(@Body() createUserDto: CreateUserDto): Promise<any> {
    return this.userService.update(createUserDto);
  }
}
