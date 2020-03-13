import { Module } from '@nestjs/common';
import { MessageController } from './message.controller';
import { MessageService } from './message.service';
import {RepositoryModule} from '../repository/repository.module'
@Module({
  imports:[RepositoryModule],
  controllers: [MessageController],
  providers: [MessageService]
})
export class MessageModule {}
