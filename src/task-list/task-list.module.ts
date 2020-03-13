import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { TaskListController } from './task-list.controller';
import { TaskListService } from './task-list.service';
import{RepositoryModule} from'../repository/repository.module';
import { TaskListMiddleware } from '../common/middleware/task-list.middleware';
import { TeamWorkApiModule } from '../team-work-api/team-work-api.module';
@Module({
  imports:[RepositoryModule,TeamWorkApiModule],
  controllers: [TaskListController],
  providers: [TaskListService]
})
export class TaskListModule implements NestModule {
  configure(consumer: MiddlewareConsumer){
    consumer.apply(TaskListMiddleware)
    .forRoutes(TaskListController);
  }
}
