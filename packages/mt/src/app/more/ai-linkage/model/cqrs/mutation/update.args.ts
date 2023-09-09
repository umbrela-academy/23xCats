import { Prisma } from "@prisma/client";
import { NTTKey } from "../../omega";

export interface UpdateArgs {
  Project: Prisma.ProjectUpdateArgs;
  Org: Prisma.OrgUpdateArgs;
  Person: Prisma.PersonUpdateArgs;
  PeopleGroup: Prisma.PeopleGroupUpdateArgs;

  IoDevice: Prisma.IoDeviceUpdateArgs;
  IoSensor: Prisma.IoSensorUpdateArgs;
  IoGroup: Prisma.IoGroupUpdateArgs;
  IoHello: Prisma.IoHelloUpdateArgs;
  IoFo: Prisma.IoFoUpdateArgs;

  Word: Prisma.WordUpdateArgs;
  Syllable: Prisma.SyllableUpdateArgs;
  Spelling: Prisma.SpellingUpdateArgs;
  Meaning: Prisma.MeaningUpdateArgs;
  Usage: Prisma.UsageUpdateArgs;
  Phrase: Prisma.PhraseUpdateArgs;
  Sentence: Prisma.SentenceUpdateArgs;
  Para: Prisma.ParaUpdateArgs;

  Character: Prisma.CharacterUpdateArgs;
  CharacterBuilder: Prisma.CharacterBuilderUpdateArgs;
  Config: Prisma.ConfigUpdateArgs;
  ConfigTemplate: Prisma.ConfigTemplateUpdateArgs;
  Conflict: Prisma.ConflictUpdateArgs;
  ConflictResolutionPath: Prisma.ConflictResolutionPathUpdateArgs;

  TurningPoint: Prisma.TurningPointUpdateArgs;
  Objective: Prisma.ObjectiveUpdateArgs;
  Mission: Prisma.MissionUpdateArgs;
  Level: Prisma.LevelUpdateArgs;
  LegendMap: Prisma.LegendMapUpdateArgs;
  Power: Prisma.PowerUpdateArgs;
  Tool: Prisma.ToolUpdateArgs;
  Vehicle: Prisma.VehicleUpdateArgs;
  CharacterArch: Prisma.CharacterArchUpdateArgs;

  StoryLine: Prisma.StoryLineUpdateArgs;
  Modeler: Prisma.ModelerUpdateArgs;
  Action: Prisma.ActionUpdateArgs;
  State: Prisma.StateUpdateArgs;

  CausalEvent: Prisma.CausalEventUpdateArgs;
  View: Prisma.ViewUpdateArgs;
}
export type IUpdate<NTT extends NTTKey> = UpdateArgs[NTT];

export interface UpdateManyArgs {
  Project: Prisma.ProjectUpdateManyArgs;
  Org: Prisma.OrgUpdateManyArgs;
  Person: Prisma.PersonUpdateManyArgs;
  PeopleGroup: Prisma.PeopleGroupUpdateManyArgs;

  IoDevice: Prisma.IoDeviceUpdateManyArgs;
  IoSensor: Prisma.IoSensorUpdateManyArgs;
  IoGroup: Prisma.IoGroupUpdateManyArgs;
  IoHello: Prisma.IoHelloUpdateManyArgs;
  IoFo: Prisma.IoFoUpdateManyArgs;

  Word: Prisma.WordUpdateManyArgs;
  Syllable: Prisma.SyllableUpdateManyArgs;
  Spelling: Prisma.SpellingUpdateManyArgs;
  Meaning: Prisma.MeaningUpdateManyArgs;
  Usage: Prisma.UsageUpdateManyArgs;
  Phrase: Prisma.PhraseUpdateManyArgs;
  Sentence: Prisma.SentenceUpdateManyArgs;
  Para: Prisma.ParaUpdateManyArgs;

  Character: Prisma.CharacterUpdateManyArgs;
  CharacterBuilder: Prisma.CharacterBuilderUpdateManyArgs;
  Config: Prisma.ConfigUpdateManyArgs;
  ConfigTemplate: Prisma.ConfigTemplateUpdateManyArgs;
  Conflict: Prisma.ConflictUpdateManyArgs;
  ConflictResolutionPath: Prisma.ConflictResolutionPathUpdateManyArgs;

  TurningPoint: Prisma.TurningPointUpdateManyArgs;
  Objective: Prisma.ObjectiveUpdateManyArgs;
  Mission: Prisma.MissionUpdateManyArgs;
  Level: Prisma.LevelUpdateManyArgs;
  LegendMap: Prisma.LegendMapUpdateManyArgs;
  Power: Prisma.PowerUpdateManyArgs;
  Tool: Prisma.ToolUpdateManyArgs;
  Vehicle: Prisma.VehicleUpdateManyArgs;
  CharacterArch: Prisma.CharacterArchUpdateManyArgs;

  StoryLine: Prisma.StoryLineUpdateManyArgs;
  Modeler: Prisma.ModelerUpdateManyArgs;
  Action: Prisma.ActionUpdateManyArgs;
  State: Prisma.StateUpdateManyArgs;

  CausalEvent: Prisma.CausalEventUpdateManyArgs;
  View: Prisma.ViewUpdateManyArgs;
}
export type IUpdateMany<NTT extends NTTKey> = UpdateManyArgs[NTT];