import { Injectable } from '@nestjs/common';
import { MessageRepository } from '../repository/message.repository.service';
import { MessagePostRepository } from '../repository/message-post.repository.service';
import { UserRepository } from '../repository/user.repository.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { ProjectRepository } from '../repository/project.repository.service';
@Injectable()
export class MessageService {
  constructor(
    private readonly messageRepository: MessageRepository,
    private readonly postRepository: MessagePostRepository,
    private readonly userRepository: UserRepository,
    private readonly projectRepository: ProjectRepository,
  ) {}
    ///////for this method we have to reamove  post in message schema
  /*async create(createMessageDto: CreateMessageDto): Promise<any> {
    const { eventCreator, message } = createMessageDto;
    const { post } = message;

    const newUser = await this.userRepository.findOrCreate(eventCreator);
    const projectInfo = await this.projectRepository.findOne({
      id: message['projectId'],
    });
    message['project'] = projectInfo['_id'];
    message['eventCreator'] = newUser['_id'];
   // console.log( message['project'],message['eventCreator'] )
    const messageInfo = await this.messageRepository.findOrCreate(message);
  
    post['eventCreator'] = newUser['_id'];
    post['message'] = messageInfo['_id'];
    await this.postRepository.create(post);
    return messageInfo;
  }*/
  async create(createMessageDto: CreateMessageDto): Promise<any> {
    const { eventCreator, message } = createMessageDto;
    const { post } = message;
    const newUser = await this.userRepository.findOrCreate(eventCreator);
    post['eventCreator'] = newUser['_id'];
     const postInfo= await this.postRepository.create(post);
     const projectInfo = await this.projectRepository.findOne({
      id: message['projectId'],
    });
      message['project'] = projectInfo['_id'];
      message['eventCreator'] = newUser['_id'];
      message['post'] = postInfo['_id'];
    return  this.messageRepository.create(message);
  }

  async findAll(): Promise<any> {
    return await this.messageRepository.find();
  }
  async update(createMessageDto: CreateMessageDto): Promise<any> {
    const { eventCreator, message } = createMessageDto;
    const { post } = message;
    const newUser = await this.userRepository.findOrCreate(eventCreator);
    post['eventCreator'] = newUser['_id'];
     const postInfo= await this.postRepository.findOrCreate(post);
     const projectInfo = await this.projectRepository.findOne({
      id: message['projectId'],
    });
      message['project'] = projectInfo['_id'];
      message['eventCreator'] = newUser['_id'];
      message['post'] = postInfo['_id'];
    return  this.messageRepository.findOneAndUpdate({id: message.id}, message,{new: true});
  }

 /* async update(createMessageDto: CreateMessageDto): Promise<any> {
    const { eventCreator, message } = createMessageDto;
    const { post } = message;
    const newUser = await this.userRepository.findOrCreate(eventCreator);
    const projectInfo = await this.projectRepository.findOne({
      id: message['projectId'],
    });
    message['project'] = projectInfo['_id'];
    message['eventCreator'] = newUser['_id'];
    const messageInfo = await this.messageRepository.findOneAndUpdate(
      { id: message.id },
      message,
      { new: true },
    );

    post['eventCreator'] = newUser['_id'];
    post['message'] = messageInfo['_id'];

    await this.postRepository.findOneAndUpdate({ id: post.id }, post, {
      new: true,
    });
    return messageInfo;
  }*/
  async delete(createMessageDto: CreateMessageDto): Promise<any> {
    const { eventCreator, message } = createMessageDto;
    const { post } = message;
    const newUser = await this.userRepository.findOrCreate(eventCreator);
    post['eventCreator'] = newUser['_id'];
     const postInfo= await this.postRepository.findOrCreate(post);
     const projectInfo = await this.projectRepository.findOne({
      id: message['projectId'],
    });
      message['project'] = projectInfo['_id'];
      message['eventCreator'] = newUser['_id'];
      message['post'] = postInfo['_id'];
    return  this.messageRepository.findOneAndUpdate( { id: message.id },
      {
        $set: {
          status: 'delete',
          project: message['project'],
          eventCreator: message['eventCreator'],
          post: message['post'],
        },
      },
      { new: true },);
  }


}
