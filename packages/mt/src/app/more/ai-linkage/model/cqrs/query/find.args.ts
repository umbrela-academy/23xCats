import { Prisma } from "@prisma/client";
import { NTTKey } from "../../omega";

export interface FindUniqueArgs {
  Project: Prisma.ProjectFindUniqueArgs;
  Org: Prisma.OrgFindUniqueArgs;
  Person: Prisma.PersonFindUniqueArgs;
  PeopleGroup: Prisma.PeopleGroupFindUniqueArgs;

  IoDevice: Prisma.IoDeviceFindUniqueArgs;
  IoSensor: Prisma.IoSensorFindUniqueArgs;
  IoGroup: Prisma.IoGroupFindUniqueArgs;
  IoHello: Prisma.IoHelloFindUniqueArgs;
  IoFo: Prisma.IoFoFindUniqueArgs;

  Word: Prisma.WordFindUniqueArgs;
  Syllable: Prisma.SyllableFindUniqueArgs;
  Spelling: Prisma.SpellingFindUniqueArgs;
  Meaning: Prisma.MeaningFindUniqueArgs;
  Usage: Prisma.UsageFindUniqueArgs;
  Phrase: Prisma.PhraseFindUniqueArgs;
  Sentence: Prisma.SentenceFindUniqueArgs;
  Para: Prisma.ParaFindUniqueArgs;

  Character: Prisma.CharacterFindUniqueArgs;
  CharacterBuilder: Prisma.CharacterBuilderFindUniqueArgs;
  Config: Prisma.ConfigFindUniqueArgs;
  ConfigTemplate: Prisma.ConfigTemplateFindUniqueArgs;
  Conflict: Prisma.ConflictFindUniqueArgs;
  ConflictResolutionPath: Prisma.ConflictResolutionPathFindUniqueArgs;

  TurningPoint: Prisma.TurningPointFindUniqueArgs;
  Objective: Prisma.ObjectiveFindUniqueArgs;
  Mission: Prisma.MissionFindUniqueArgs;
  Level: Prisma.LevelFindUniqueArgs;
  LegendMap: Prisma.LegendMapFindUniqueArgs;
  Power: Prisma.PowerFindUniqueArgs;
  Tool: Prisma.ToolFindUniqueArgs;
  Vehicle: Prisma.VehicleFindUniqueArgs;
  CharacterArch: Prisma.CharacterArchFindUniqueArgs;

  StoryLine: Prisma.StoryLineFindUniqueArgs;
  Modeler: Prisma.ModelerFindUniqueArgs;
  Action: Prisma.ActionFindUniqueArgs;
  State: Prisma.StateFindUniqueArgs;

  CausalEvent: Prisma.CausalEventFindUniqueArgs;
  View: Prisma.ViewFindUniqueArgs;
}
export type IFindUnique<T extends NTTKey> = FindUniqueArgs[T];

export interface FindFirstArgs {
  Project: Prisma.ProjectFindFirstArgs;
  Org: Prisma.OrgFindFirstArgs;
  Person: Prisma.PersonFindFirstArgs;
  PeopleGroup: Prisma.PeopleGroupFindFirstArgs;

  IoDevice: Prisma.IoDeviceFindFirstArgs;
  IoSensor: Prisma.IoSensorFindFirstArgs;
  IoGroup: Prisma.IoGroupFindFirstArgs;
  IoHello: Prisma.IoHelloFindFirstArgs;
  IoFo: Prisma.IoFoFindFirstArgs;

  Word: Prisma.WordFindFirstArgs;
  Syllable: Prisma.SyllableFindFirstArgs;
  Spelling: Prisma.SpellingFindFirstArgs;
  Meaning: Prisma.MeaningFindFirstArgs;
  Usage: Prisma.UsageFindFirstArgs;
  Phrase: Prisma.PhraseFindFirstArgs;
  Sentence: Prisma.SentenceFindFirstArgs;
  Para: Prisma.ParaFindFirstArgs;

  Character: Prisma.CharacterFindFirstArgs;
  CharacterBuilder: Prisma.CharacterBuilderFindFirstArgs;
  Config: Prisma.ConfigFindFirstArgs;
  ConfigTemplate: Prisma.ConfigTemplateFindFirstArgs;
  Conflict: Prisma.ConflictFindFirstArgs;
  ConflictResolutionPath: Prisma.ConflictResolutionPathFindFirstArgs;

  TurningPoint: Prisma.TurningPointFindFirstArgs;
  Objective: Prisma.ObjectiveFindFirstArgs;
  Mission: Prisma.MissionFindFirstArgs;
  Level: Prisma.LevelFindFirstArgs;
  LegendMap: Prisma.LegendMapFindFirstArgs;
  Power: Prisma.PowerFindFirstArgs;
  Tool: Prisma.ToolFindFirstArgs;
  Vehicle: Prisma.VehicleFindFirstArgs;
  CharacterArch: Prisma.CharacterArchFindFirstArgs;

  StoryLine: Prisma.StoryLineFindFirstArgs;
  Modeler: Prisma.ModelerFindFirstArgs;
  Action: Prisma.ActionFindFirstArgs;
  State: Prisma.StateFindFirstArgs;

  CausalEvent: Prisma.CausalEventFindFirstArgs;
  View: Prisma.ViewFindFirstArgs;
}
export type IFindFirst<T extends NTTKey> = FindFirstArgs[T];

export interface FindManyArgs {
  Project: Prisma.ProjectFindManyArgs;
  Org: Prisma.OrgFindManyArgs;
  Person: Prisma.PersonFindManyArgs;
  PeopleGroup: Prisma.PeopleGroupFindManyArgs;

  IoDevice: Prisma.IoDeviceFindManyArgs;
  IoSensor: Prisma.IoSensorFindManyArgs;
  IoGroup: Prisma.IoGroupFindManyArgs;
  IoHello: Prisma.IoHelloFindManyArgs;
  IoFo: Prisma.IoFoFindManyArgs;

  Word: Prisma.WordFindManyArgs;
  Syllable: Prisma.SyllableFindManyArgs;
  Spelling: Prisma.SpellingFindManyArgs;
  Meaning: Prisma.MeaningFindManyArgs;
  Usage: Prisma.UsageFindManyArgs;
  Phrase: Prisma.PhraseFindManyArgs;
  Sentence: Prisma.SentenceFindManyArgs;
  Para: Prisma.ParaFindManyArgs;
  Character: Prisma.CharacterFindManyArgs;
  CharacterBuilder: Prisma.CharacterBuilderFindManyArgs;
  Config: Prisma.ConfigFindManyArgs;
  ConfigTemplate: Prisma.ConfigTemplateFindManyArgs;
  Conflict: Prisma.ConflictFindManyArgs;
  ConflictResolutionPath: Prisma.ConflictResolutionPathFindManyArgs;
  TurningPoint: Prisma.TurningPointFindManyArgs;
  Objective: Prisma.ObjectiveFindManyArgs;
  Mission: Prisma.MissionFindManyArgs;
  Level: Prisma.LevelFindManyArgs;
  LegendMap: Prisma.LegendMapFindManyArgs;
  Power: Prisma.PowerFindManyArgs;
  Tool: Prisma.ToolFindManyArgs;
  Vehicle: Prisma.VehicleFindManyArgs;
  CharacterArch: Prisma.CharacterArchFindManyArgs;
  StoryLine: Prisma.StoryLineFindManyArgs;
  Modeler: Prisma.ModelerFindManyArgs;
  Action: Prisma.ActionFindManyArgs;
  State: Prisma.StateFindManyArgs;
  CausalEvent: Prisma.CausalEventFindManyArgs;
  View: Prisma.ViewFindManyArgs;
}
export type IFindMany<T extends NTTKey> = FindManyArgs[T];