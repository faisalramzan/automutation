import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repository/user.repository.service';
import { MessagePostRepository } from '../repository/message-post.repository.service';
import { CreateMessageReplyDto } from './dto/create-message-reply.dto';
import { ProjectRepository } from '../repository/project.repository.service';

@Injectable()
export class MessageReplyService {
  constructor(
    private readonly messagePostRepository: MessagePostRepository,
    private readonly userRepository: UserRepository,
    private readonly  projectReopository: ProjectRepository,
  ) {}
  async create(createMessageReplyDto: CreateMessageReplyDto): Promise<any> {
    const { eventCreator, messagePost } = createMessageReplyDto;

    const newUser = await this.userRepository.findOrCreate(eventCreator);
    messagePost['eventCreator'] = newUser['_id'];
    return this.messagePostRepository.findOrCreate(messagePost);
  }
  async update(createMessageReplyDto: CreateMessageReplyDto): Promise<any> {
    const { eventCreator, messagePost } = createMessageReplyDto;
    const newUser = await this.userRepository.findOrCreate(eventCreator);
    messagePost['eventCreator'] = newUser['_id'];
    return this.messagePostRepository.findOneAndUpdate(
      { id: messagePost.id },
      messagePost,
      { new: true },
    );
  }
  async delete(createMessageReplyDto: CreateMessageReplyDto): Promise<any> {
    const { eventCreator, messagePost } = createMessageReplyDto;
    const newUser = await this.userRepository.findOrCreate(eventCreator);
    messagePost['eventCreator'] = newUser['_id'];
    return this.messagePostRepository.findOneAndUpdate(
      { id: messagePost.id },
      {
        $set: {
          status: messagePost.status,
          eventCreator: messagePost['eventCreator'],
        },
      },
    );
  }
}
