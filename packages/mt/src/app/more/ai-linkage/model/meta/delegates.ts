import { Prisma } from "@prisma/client";
import { NTTKey } from "../omega";

export interface Delegates {
  Project: Prisma.ProjectDelegate;
  Org: Prisma.OrgDelegate;
  Person: Prisma.PersonDelegate;
  PeopleGroup: Prisma.PeopleGroupDelegate;

  IoDevice: Prisma.IoDeviceDelegate;
  IoSensor: Prisma.IoSensorDelegate;
  IoGroup: Prisma.IoGroupDelegate;
  IoHello: Prisma.IoHelloDelegate;
  IoFo: Prisma.IoFoDelegate;

  Word: Prisma.WordDelegate;
  Syllable: Prisma.SyllableDelegate;
  Spelling: Prisma.SpellingDelegate;
  Meaning: Prisma.MeaningDelegate;
  Usage: Prisma.UsageDelegate;
  Phrase: Prisma.PhraseDelegate;
  Sentence: Prisma.SentenceDelegate;
  Para: Prisma.ParaDelegate;

  Character: Prisma.CharacterDelegate;
  CharacterBuilder: Prisma.CharacterBuilderDelegate;
  Config: Prisma.ConfigDelegate;
  ConfigTemplate: Prisma.ConfigTemplateDelegate;
  Conflict: Prisma.ConflictDelegate;
  ConflictResolutionPath: Prisma.ConflictResolutionPathDelegate;

  TurningPoint: Prisma.TurningPointDelegate;
  Objective: Prisma.ObjectiveDelegate;
  Mission: Prisma.MissionDelegate;
  Level: Prisma.LevelDelegate;
  LegendMap: Prisma.LegendMapDelegate;
  Power: Prisma.PowerDelegate;
  Tool: Prisma.ToolDelegate;
  Vehicle: Prisma.VehicleDelegate;
  CharacterArch: Prisma.CharacterArchDelegate;

  StoryLine: Prisma.StoryLineDelegate;
  Modeler: Prisma.ModelerDelegate;
  Action: Prisma.ActionDelegate;
  State: Prisma.StateDelegate;

  CausalEvent: Prisma.CausalEventDelegate;
  View: Prisma.ViewDelegate;
}
export type Delegate<T extends NTTKey> = Delegates[T];