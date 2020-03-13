import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repository/user.repository.service';
import { CreateUserDto } from './dto/create-user.dto';
@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}
  async findAll(): Promise<any> {
    return this.userRepository.find();
  }
  async create(createUserDto: CreateUserDto): Promise<any> {
    const { user, eventCreator } = createUserDto;
    await this.userRepository.findOrCreate(eventCreator);
    return this.userRepository.findOrCreate(user);
  }

  async update(createUserDto: CreateUserDto): Promise<any> {
    const { user, eventCreator } = createUserDto;
    const newUser = await this.userRepository.findOrCreate(eventCreator);
    user['eventCreator'] = newUser['_id'];
    return this.userRepository.findOneAndUpdate({ id: user.id }, user, {
      new: true,
    });
  }

  delete(): any {
    return 'Here is Project Delete meathod ';
  }
}
