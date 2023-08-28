import { Test, TestingModule } from '@nestjs/testing';
import { NttService } from './ntt.service';

describe('NttService', () => {
  let service: NttService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NttService],
    }).compile();

    service = module.get<NttService>(NttService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
