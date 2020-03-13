import { Module } from '@nestjs/common';
import { MessageReplyController } from './message-reply.controller';
import { MessageReplyService } from './message-reply.service';
import { RepositoryModule } from '../repository/repository.module';
@Module({
  imports:[RepositoryModule],
  controllers: [MessageReplyController],
  providers: [MessageReplyService]
})
export class MessageReplyModule {}
