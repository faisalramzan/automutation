
import { Injectable } from '@nestjs/common';
import { TW_API } from '../common/teamwork-api/tw-config';
import { plainToClass } from 'class-transformer';
import { UserApi } from '../common/transformers/user-api.transformer';
import { UserRepository } from '../repository/user.repository.service';
@Injectable()
export class EventCreatorGetApi {
  constructor(
    private readonly userRepository: UserRepository,
  ) {}
  async getCurrentLoginUser() {
    const twUserInfo = await TW_API.people.me();
    const { STATUS, person } = twUserInfo;
    if (STATUS === 'OK') {
      const newUser = plainToClass(UserApi, person, {
        strategy: 'excludeAll',
      });
      const dbUserInfo = await this.userRepository.findOrCreate(newUser);
      return dbUserInfo['_id'];
    }
  }
  
}


