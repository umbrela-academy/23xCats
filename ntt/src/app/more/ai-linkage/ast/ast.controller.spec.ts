import { Test, TestingModule } from '@nestjs/testing';
import { AstController } from './ast.controller';

describe('AstController', () => {
  let controller: AstController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AstController],
    }).compile();

    controller = module.get<AstController>(AstController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
