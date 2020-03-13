import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { CompanyController } from './company.controller';
import { CompanyService } from './company.service';
import { RepositoryModule } from '../repository/repository.module';
import { CompanyMiddleware } from '../common/middleware/company.middleware';
import { TeamWorkApiModule } from 'src/team-work-api/team-work-api.module';

@Module({
  imports:[RepositoryModule,TeamWorkApiModule],
  controllers: [CompanyController],
  providers: [CompanyService]
})
export class CompanyModule implements NestModule {
  configure(consumer: MiddlewareConsumer){
    consumer.apply(CompanyMiddleware)
    .forRoutes(CompanyController);
  }
}
