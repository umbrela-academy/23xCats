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

    Word: this.prisma.word,
    Syllable: this.prisma.syllable,
    Spelling: this.prisma.spelling,
    Meaning: this.prisma.meaning,
    Usage: this.prisma.usage,
    Phrase: this.prisma.phrase,
    Sentence: this.prisma.sentence,
    Para: this.prisma.para,
  
    Character: this.prisma.character,
    CharacterBuilder: this.prisma.characterBuilder,
    Config: this.prisma.config,
    ConfigTemplate: this.prisma.configTemplate,
    Conflict: this.prisma.conflict,
    ConflictResolutionPath: this.prisma.conflictResolutionPath,
  
    TurningPoint: this.prisma.turningPoint,
    Objective: this.prisma.objective,
    Mission: this.prisma.mission,
    Level: this.prisma.level,
    LegendMap: this.prisma.legendMap,
    Power: this.prisma.power,
    Tool: this.prisma.tool,
    Vehicle: this.prisma.vehicle,
    CharacterArch: this.prisma.characterArch,
  
    StoryLine: this.prisma.storyLine,
    Modeler: this.prisma.modeler,
    Action: this.prisma.action,
    State: this.prisma.state,
  
    CausalEvent: this.prisma.causalEvent,
    View: this.prisma.view,

    Patient: this.prisma.patient,
    Treatment: this.prisma.treatment,
    Therapy: this.prisma.therapy,
    Surgery: this.prisma.surgery,
    Medication: this.prisma.medication,
    Remedy: this.prisma.remedy,
    Equipment: this.prisma.equipment,
    Inventory: this.prisma.inventory,
    Payment: this.prisma.payment,
    Quote: this.prisma.quote,
    Invoice: this.prisma.invoice,
    Receipt: this.prisma.receipt,
    TeamMember: this.prisma.teamMember,
    PayrollItem: this.prisma.payrollItem,
  } as const;

  constructor (
    private readonly prisma: PrismaService
  ) { }

  delegate(key: NTTKey) {
    return this.mapper[key];
  }
  
}
