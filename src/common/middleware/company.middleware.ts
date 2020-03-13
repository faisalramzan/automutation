import { Injectable, NestMiddleware, Body } from '@nestjs/common';
import { Request, Response } from 'express';
import { UserRepository } from '../../repository/user.repository.service';
@Injectable()
export class CompanyMiddleware implements NestMiddleware {
  constructor(private readonly userRepository: UserRepository) {}
  async use(req: Request, res: Response, next: Function) {
    const {
      body: { eventCreator,company},
    } = req;

    const eventCreatorInfo = await this.userRepository.findOrCreate(
      eventCreator,
    );
    req.body.company.eventCreator = eventCreatorInfo['_id'];
    next();
  }
}
