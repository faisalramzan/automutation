import { Injectable, NestMiddleware, Body } from '@nestjs/common';
import { Request, Response } from 'express';
import { UserRepository } from '../../repository/user.repository.service';
@Injectable()
export class ProjectMiddleware implements NestMiddleware {
  constructor(
    private readonly userRepository: UserRepository,
  ) {}
  async use(req: Request, res: Response, next: Function) {
    const {
      body: { eventCreator, project },
    } = req;
    const eventCreatorInfo = await this.userRepository.findOrCreate(
      eventCreator,
    );
    req.body.project.eventCreator = eventCreatorInfo['_id'];
    next();

  }
}
