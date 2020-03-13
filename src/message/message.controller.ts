import { Controller, Get, Post, Body, Put, Delete, HttpCode } from '@nestjs/common';
import { MessageService } from './message.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('Message')
@Controller('message')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}
  @Get('/')
  async findAll(): Promise<any> {
    return await this.messageService.findAll();
  }
  @Post('/create')
  @HttpCode(200)
  async create(@Body() createMessageDto: CreateMessageDto): Promise<any> {
    return this.messageService.create(createMessageDto);
  }
  @Post('/update')
  @HttpCode(200)
  async update(@Body() createMessageDto: CreateMessageDto): Promise<any> {
    return this.messageService.update(createMessageDto);
  }
  @Post('/delete')
  @HttpCode(200)
  async delete(@Body() createMessageDto: CreateMessageDto): Promise<any> {
    return this.messageService.delete(createMessageDto);
  }
}
