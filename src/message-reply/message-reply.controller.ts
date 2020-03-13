import { Controller, Get, Post, Body, Put, Delete, HttpCode } from '@nestjs/common';
import { CreateMessageReplyDto } from '../message-reply/dto/create-message-reply.dto';
import { ApiTags } from '@nestjs/swagger';
import { MessageReplyService } from './message-reply.service';
@ApiTags('Message Reply')
@Controller('message-reply')
export class MessageReplyController {
  constructor(private readonly messageReplyService: MessageReplyService) {}
  @Post('/create')
  @HttpCode(200)
  async create(
    @Body() createMessageReplyDto: CreateMessageReplyDto,
  ): Promise<any> {
    return this.messageReplyService.create(createMessageReplyDto);
  }
  @Post('/update')
  @HttpCode(200)
  async update(
    @Body() createMessageReplyDto: CreateMessageReplyDto,
  ): Promise<any> {
    return this.messageReplyService.update(createMessageReplyDto);
  }
  @Post('/delete')
  @HttpCode(200)
  async delete(
    @Body() createMessageReplyDto: CreateMessageReplyDto,
  ): Promise<any> {
    return this.messageReplyService.delete(createMessageReplyDto);
  }
  
}
