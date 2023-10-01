import { Test, TestingModule } from '@nestjs/testing';
import { DbController } from './db.controller';
import { NttService } from './ntt.service';
import { PrismaService } from './prisma.service';

describe('DbController', () => {
  let controller: DbController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DbController],
      providers: [NttService, PrismaService]
    }).compile();

    controller = module.get<DbController>(DbController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
