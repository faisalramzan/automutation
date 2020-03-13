import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import {RepositoryModule} from '../repository/repository.module'
import { TaskMidddleware } from '../common/middleware/task.middleware';
import { TeamWorkApiModule } from '../team-work-api/team-work-api.module';
@Module({
  imports:[RepositoryModule,TeamWorkApiModule],
  providers: [TaskService],
  controllers: [TaskController]
})
export class TaskModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(TaskMidddleware)
    .forRoutes(TaskController)
  }
}