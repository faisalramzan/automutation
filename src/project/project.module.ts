import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { ProjectController } from './project.controller';
import { ProjectService } from './project.service';
import{ProjectRepository} from '../repository/project.repository.service'
import { RepositoryModule } from '../repository/repository.module';
import { ProjectMiddleware } from '../common/middleware/project.middleware';
import { TeamWorkApiModule } from '../team-work-api/team-work-api.module';
@Module({
  imports:[RepositoryModule,TeamWorkApiModule],
  controllers: [ProjectController],
  providers: [ProjectService]
})
export class ProjectModule implements NestModule {

    configure(consumer: MiddlewareConsumer) {
      consumer
        .apply(ProjectMiddleware)
        .forRoutes(ProjectController);
    }

}
