import { Prisma } from "@prisma/client";
import { NTTKey } from "../../omega";

export interface CreateArgs {
  Project: Prisma.ProjectCreateArgs;
  Org: Prisma.OrgCreateArgs;
  Person: Prisma.PersonCreateArgs;
  PeopleGroup: Prisma.PeopleGroupCreateArgs;

  IoDevice: Prisma.IoDeviceCreateArgs;
  IoSensor: Prisma.IoSensorCreateArgs;
  IoGroup: Prisma.IoGroupCreateArgs;
  IoHello: Prisma.IoHelloCreateArgs;
  IoFo: Prisma.IoFoCreateArgs;

  Word: Prisma.WordCreateArgs;
  Syllable: Prisma.SyllableCreateArgs;
  Spelling: Prisma.SpellingCreateArgs;
  Meaning: Prisma.MeaningCreateArgs;
  Usage: Prisma.UsageCreateArgs;
  Phrase: Prisma.PhraseCreateArgs;
  Sentence: Prisma.SentenceCreateArgs;
  Para: Prisma.ParaCreateArgs;

  Character: Prisma.CharacterCreateArgs;
  CharacterBuilder: Prisma.CharacterBuilderCreateArgs;
  Config: Prisma.ConfigCreateArgs;
  ConfigTemplate: Prisma.ConfigTemplateCreateArgs;
  Conflict: Prisma.ConflictCreateArgs;
  ConflictResolutionPath: Prisma.ConflictResolutionPathCreateArgs;

  TurningPoint: Prisma.TurningPointCreateArgs;
  Objective: Prisma.ObjectiveCreateArgs;
  Mission: Prisma.MissionCreateArgs;
  Level: Prisma.LevelCreateArgs;
  LegendMap: Prisma.LegendMapCreateArgs;
  Power: Prisma.PowerCreateArgs;
  Tool: Prisma.ToolCreateArgs;
  Vehicle: Prisma.VehicleCreateArgs;
  CharacterArch: Prisma.CharacterArchCreateArgs;

  StoryLine: Prisma.StoryLineCreateArgs;
  Modeler: Prisma.ModelerCreateArgs;
  Action: Prisma.ActionCreateArgs;
  State: Prisma.StateCreateArgs;

  CausalEvent: Prisma.CausalEventCreateArgs;
  View: Prisma.ViewCreateArgs;
}
export type ICreate<NTT extends NTTKey> = CreateArgs[NTT];


export interface CreateManyArgs {
  Project: Prisma.ProjectCreateManyArgs;
  Org: Prisma.OrgCreateManyArgs;
  Person: Prisma.PersonCreateManyArgs;
  PeopleGroup: Prisma.PeopleGroupCreateManyArgs;

  IoDevice: Prisma.IoDeviceCreateManyArgs;
  IoSensor: Prisma.IoSensorCreateManyArgs;
  IoGroup: Prisma.IoGroupCreateManyArgs;
  IoHello: Prisma.IoHelloCreateManyArgs;
  IoFo: Prisma.IoFoCreateManyArgs;

  Word: Prisma.WordCreateManyArgs;
  Syllable: Prisma.SyllableCreateManyArgs;
  Spelling: Prisma.SpellingCreateManyArgs;
  Meaning: Prisma.MeaningCreateManyArgs;
  Usage: Prisma.UsageCreateManyArgs;
  Phrase: Prisma.PhraseCreateManyArgs;
  Sentence: Prisma.SentenceCreateManyArgs;
  Para: Prisma.ParaCreateManyArgs;

  Character: Prisma.CharacterCreateManyArgs;
  CharacterBuilder: Prisma.CharacterBuilderCreateManyArgs;
  Config: Prisma.ConfigCreateManyArgs;
  ConfigTemplate: Prisma.ConfigTemplateCreateManyArgs;
  Conflict: Prisma.ConflictCreateManyArgs;
  ConflictResolutionPath: Prisma.ConflictResolutionPathCreateManyArgs;

  TurningPoint: Prisma.TurningPointCreateManyArgs;
  Objective: Prisma.ObjectiveCreateManyArgs;
  Mission: Prisma.MissionCreateManyArgs;
  Level: Prisma.LevelCreateManyArgs;
  LegendMap: Prisma.LegendMapCreateManyArgs;
  Power: Prisma.PowerCreateManyArgs;
  Tool: Prisma.ToolCreateManyArgs;
  Vehicle: Prisma.VehicleCreateManyArgs;
  CharacterArch: Prisma.CharacterArchCreateManyArgs;

  StoryLine: Prisma.StoryLineCreateManyArgs;
  Modeler: Prisma.ModelerCreateManyArgs;
  Action: Prisma.ActionCreateManyArgs;
  State: Prisma.StateCreateManyArgs;

  CausalEvent: Prisma.CausalEventCreateManyArgs;
  View: Prisma.ViewCreateManyArgs;
}
export type ICreateMany<NTT extends NTTKey> = CreateManyArgs[NTT];