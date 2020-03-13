import { NestMiddleware, Injectable } from '@nestjs/common';
import { UserRepository } from '../../repository/user.repository.service';
import { Request } from 'express';
@Injectable()
export class TaskMidddleware implements NestMiddleware {
  constructor(private readonly userRepository: UserRepository) {}
  async use(req: Request, res: Response, next: Function) {
    const {
      body: { eventCreator,task },
    } = req;
    const eventCreatorInfo = await this.userRepository.findOrCreate(
      eventCreator
    );
    req.body.task.eventCreator = eventCreatorInfo['_id'];

    next();
  }
}
