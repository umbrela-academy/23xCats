import { Prisma } from "@prisma/client";
import { NTTKey } from "../../omega";
import { Delegate } from "../../meta/delegates";

export interface AggregateArgs {
  Project: Prisma.ProjectAggregateArgs;
  Org: Prisma.OrgAggregateArgs;
  Person: Prisma.PersonAggregateArgs;
  PeopleGroup: Prisma.PeopleGroupAggregateArgs;

  IoDevice: Prisma.IoDeviceAggregateArgs;
  IoSensor: Prisma.IoSensorAggregateArgs;
  IoGroup: Prisma.IoGroupAggregateArgs;
  IoHello: Prisma.IoHelloAggregateArgs;
  IoFo: Prisma.IoFoAggregateArgs;

  Word: Prisma.WordAggregateArgs;
  Syllable: Prisma.SyllableAggregateArgs;
  Spelling: Prisma.SpellingAggregateArgs;
  Meaning: Prisma.MeaningAggregateArgs;
  Usage: Prisma.UsageAggregateArgs;
  Phrase: Prisma.PhraseAggregateArgs;
  Sentence: Prisma.SentenceAggregateArgs;
  Para: Prisma.ParaAggregateArgs;

  Character: Prisma.CharacterAggregateArgs;
  CharacterBuilder: Prisma.CharacterBuilderAggregateArgs;
  Config: Prisma.ConfigAggregateArgs;
  ConfigTemplate: Prisma.ConfigTemplateAggregateArgs;
  Conflict: Prisma.ConflictAggregateArgs;
  ConflictResolutionPath: Prisma.ConflictResolutionPathAggregateArgs;

  TurningPoint: Prisma.TurningPointAggregateArgs;
  Objective: Prisma.ObjectiveAggregateArgs;
  Mission: Prisma.MissionAggregateArgs;
  Level: Prisma.LevelAggregateArgs;
  LegendMap: Prisma.LegendMapAggregateArgs;
  Power: Prisma.PowerAggregateArgs;
  Tool: Prisma.ToolAggregateArgs;
  Vehicle: Prisma.VehicleAggregateArgs;
  CharacterArch: Prisma.CharacterArchAggregateArgs;

  StoryLine: Prisma.StoryLineAggregateArgs;
  Modeler: Prisma.ModelerAggregateArgs;
  Action: Prisma.ActionAggregateArgs;
  State: Prisma.StateAggregateArgs;

  CausalEvent: Prisma.CausalEventAggregateArgs;
  View: Prisma.ViewAggregateArgs;
}

export type IAggregate<T extends NTTKey> = AggregateArgs[T];

export type IGroupBy<NTT extends NTTKey> = Parameters<
  Delegate<NTT>['groupBy']
>;