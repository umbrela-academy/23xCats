import { Test, TestingModule } from '@nestjs/testing';
import { DmmfService } from './dmmf.service';

describe('DmmfService', () => {
  let service: DmmfService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DmmfService],
    }).compile();

    service = module.get<DmmfService>(DmmfService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
