import { Prisma } from "@prisma/client";
import { NTTKey } from "../../omega";

export interface UpsertArgs {
  Project: Prisma.ProjectUpsertArgs;
  Org: Prisma.OrgUpsertArgs;
  Person: Prisma.PersonUpsertArgs;
  PeopleGroup: Prisma.PeopleGroupUpsertArgs;

  IoDevice: Prisma.IoDeviceUpsertArgs;
  IoSensor: Prisma.IoSensorUpsertArgs;
  IoGroup: Prisma.IoGroupUpsertArgs;
  IoHello: Prisma.IoHelloUpsertArgs;
  IoFo: Prisma.IoFoUpsertArgs;

  Word: Prisma.WordUpsertArgs;
  Syllable: Prisma.SyllableUpsertArgs;
  Spelling: Prisma.SpellingUpsertArgs;
  Meaning: Prisma.MeaningUpsertArgs;
  Usage: Prisma.UsageUpsertArgs;
  Phrase: Prisma.PhraseUpsertArgs;
  Sentence: Prisma.SentenceUpsertArgs;
  Para: Prisma.ParaUpsertArgs;

  Character: Prisma.CharacterUpsertArgs;
  CharacterBuilder: Prisma.CharacterBuilderUpsertArgs;
  Config: Prisma.ConfigUpsertArgs;
  ConfigTemplate: Prisma.ConfigTemplateUpsertArgs;
  Conflict: Prisma.ConflictUpsertArgs;
  ConflictResolutionPath: Prisma.ConflictResolutionPathUpsertArgs;

  TurningPoint: Prisma.TurningPointUpsertArgs;
  Objective: Prisma.ObjectiveUpsertArgs;
  Mission: Prisma.MissionUpsertArgs;
  Level: Prisma.LevelUpsertArgs;
  LegendMap: Prisma.LegendMapUpsertArgs;
  Power: Prisma.PowerUpsertArgs;
  Tool: Prisma.ToolUpsertArgs;
  Vehicle: Prisma.VehicleUpsertArgs;
  CharacterArch: Prisma.CharacterArchUpsertArgs;

  StoryLine: Prisma.StoryLineUpsertArgs;
  Modeler: Prisma.ModelerUpsertArgs;
  Action: Prisma.ActionUpsertArgs;
  State: Prisma.StateUpsertArgs;

  CausalEvent: Prisma.CausalEventUpsertArgs;
  View: Prisma.ViewUpsertArgs;
}
export type IUpsert<NTT extends NTTKey> = UpsertArgs[NTT];