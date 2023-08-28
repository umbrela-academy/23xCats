import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { NTTKey } from '../model/omega';

@Injectable()
export class NttService {

  private mapper: Record<NTTKey, any> = {
    Project: this.prisma.project,
    Org: this.prisma.org,
    Person: this.prisma.person,
    PeopleGroup: this.prisma.peopleGroup,

    IoDevice: this.prisma.ioDevice,
    IoSensor: this.prisma.ioSensor,
    IoGroup: this.prisma.ioGroup,
    IoHello: this.prisma.ioHello,
    IoFo: this.prisma.ioFo,
  } as const;

  constructor (
    private readonly prisma: PrismaService
  ) { }

  delegate(key: NTTKey) {
    return this.mapper[key];
  }
  
}
