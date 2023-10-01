import {
  IoDevice,
  IoFo,
  IoGroup,
  IoHello,
  IoSensor,
  Org,
  PeopleGroup,
  Person,
  Project,
  Syllable,
  Spelling,
  Meaning,
  Usage,
  Phrase,
  Sentence,
  Para,
  Character,
  CharacterBuilder,
  Config,
  ConfigTemplate,
  Conflict,
  ConflictResolutionPath,
  TurningPoint,
  Objective,
  Mission,
  Level,
  LegendMap,
  Power,
  Tool,
  Vehicle,
  CharacterArch,
  StoryLine,
  Modeler,
  Action,
  State,
  CausalEvent,
  View,
  Word,
  Patient,
  Treatment,
  Therapy,
  Surgery,
  Medication,
  Remedy,
  Equipment,
  Inventory,
  Payment,
  Quote,
  Invoice,
  Receipt,
  TeamMember,
  PayrollItem,
} from './entities';

export const Entities = {
  Project,
  Org,
  Person,
  PeopleGroup,

  IoDevice,
  IoSensor,
  IoGroup,
  IoHello,
  IoFo,

  Word,
  Syllable,
  Spelling,
  Meaning,
  Usage,

  Phrase,
  Sentence,
  Para,

  Character,
  CharacterBuilder,

  Config,
  ConfigTemplate,

  Conflict,
  ConflictResolutionPath,

  TurningPoint,
  Objective,
  Mission,
  Level,
  LegendMap,
  Power,
  Tool,
  Vehicle,

  CharacterArch,
  StoryLine,

  Modeler,
  Action,
  State,
  CausalEvent,
  View,

  Patient,
  Treatment,
  Therapy,
  Surgery,
  Medication,
  Remedy,
  Equipment,
  Inventory,
  Payment,
  Quote,
  Invoice,
  Receipt,
  TeamMember,
  PayrollItem,
} as const;

export type EntitiesType = typeof Entities;
export type NTTKey = keyof EntitiesType;

export type CoreEntities = {
  [ntt in keyof EntitiesType]: {
    uname: string;
    lname: string;
    delegate: string;
    select: string;
    data: string;
    where: string;
    include?: string;
    search?: string;
  };
};
