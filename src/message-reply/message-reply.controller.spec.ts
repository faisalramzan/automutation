import { Test, TestingModule } from '@nestjs/testing';
import { MessageReplyController } from './message-reply.controller';

describe('MessageReply Controller', () => {
  let controller: MessageReplyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MessageReplyController],
    }).compile();

    controller = module.get<MessageReplyController>(MessageReplyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
