import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectModule } from './project/project.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { RepositoryModule } from './repository/repository.module';
import { TaskListModule } from './task-list/task-list.module';
import { CompanyModule } from './company/company.module';
import { LinkModule } from './link/link.module';
import { NoteBookModule } from './note-book/note-book.module';
import { MessageModule } from './message/message.module';
import { ColumnModule } from './column/column.module';
import { TaskModule } from './task/task.module';
import { MessageReplyModule } from './message-reply/message-reply.module';
import { TeamWorkApiModule } from './team-work-api/team-work-api.module';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/automation'),
    ProjectModule,
    UserModule,
    RepositoryModule,
    TaskListModule,
    TaskModule,
    CompanyModule,
    LinkModule,
    NoteBookModule,
    MessageModule,
    ColumnModule,
    MessageReplyModule,
    TeamWorkApiModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
