import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectSchema } from './schemas/project.schema';
import { ProjectRepository } from './project.repository.service';
import { UserSchema } from './schemas/user.schema';
import { UserRepository } from './user.repository.service';
import { TaskListRepository } from './task-list.repository.service';
import { TaskListSchema } from './schemas/task-list.schema';
import { TaskSchema } from './schemas/task.schema';
import { TaskRepository } from './task.repository.service';
import { MessageSchema } from './schemas/message.schema';
import { MessageRepository } from './message.repository.service';
import { MessagePostRepository } from './message-post.repository.service';
import { MessagePostSchema } from './schemas/post.schema';
import { CompanySchema } from './schemas/company.schema';
import { CompanyRepository } from './company.repository.service';
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Project', schema: ProjectSchema },
      { name: 'User', schema: UserSchema },
      { name: 'TaskList', schema: TaskListSchema },
      { name: 'Task', schema: TaskSchema },
      { name: 'Message', schema: MessageSchema },
      { name: 'MessagePost', schema: MessagePostSchema },
      { name: 'Company', schema: CompanySchema },
    ]),
  ],
  providers: [
    ProjectRepository,
    UserRepository,
    TaskListRepository,
    TaskRepository,
    MessageRepository,
    MessagePostRepository,
    CompanyRepository,
  ],
  exports: [
    MongooseModule,
    ProjectRepository,
    UserRepository,
    TaskListRepository,
    TaskRepository,
    MessageRepository,
    MessagePostRepository,
    CompanyRepository
  ],
})
export class RepositoryModule {}
