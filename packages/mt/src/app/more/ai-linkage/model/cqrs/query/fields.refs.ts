import { Prisma } from "@prisma/client";
import { NTTKey } from "../../omega";

export interface FieldRefs {
  Project: Prisma.ProjectFieldRefs;
  Org: Prisma.OrgFieldRefs;
  Person: Prisma.PersonFieldRefs;
  PeopleGroup: Prisma.PeopleGroupFieldRefs;

  IoDevice: Prisma.IoDeviceFieldRefs;
  IoSensor: Prisma.IoSensorFieldRefs;
  IoGroup: Prisma.IoGroupFieldRefs;
  IoHello: Prisma.IoHelloFieldRefs;
  IoFo: Prisma.IoFoFieldRefs;

  Word: Prisma.WordFieldRefs;
  Syllable: Prisma.SyllableFieldRefs;
  Spelling: Prisma.SpellingFieldRefs;
  Meaning: Prisma.MeaningFieldRefs;
  Usage: Prisma.UsageFieldRefs;
  Phrase: Prisma.PhraseFieldRefs;
  Sentence: Prisma.SentenceFieldRefs;
  Para: Prisma.ParaFieldRefs;

  Character: Prisma.CharacterFieldRefs;
  CharacterBuilder: Prisma.CharacterBuilderFieldRefs;
  Config: Prisma.ConfigFieldRefs;
  ConfigTemplate: Prisma.ConfigTemplateFieldRefs;
  Conflict: Prisma.ConflictFieldRefs;
  ConflictResolutionPath: Prisma.ConflictResolutionPathFieldRefs;

  TurningPoint: Prisma.TurningPointFieldRefs;
  Objective: Prisma.ObjectiveFieldRefs;
  Mission: Prisma.MissionFieldRefs;
  Level: Prisma.LevelFieldRefs;
  LegendMap: Prisma.LegendMapFieldRefs;
  Power: Prisma.PowerFieldRefs;
  Tool: Prisma.ToolFieldRefs;
  Vehicle: Prisma.VehicleFieldRefs;
  CharacterArch: Prisma.CharacterArchFieldRefs;

  StoryLine: Prisma.StoryLineFieldRefs;
  Modeler: Prisma.ModelerFieldRefs;
  Action: Prisma.ActionFieldRefs;
  State: Prisma.StateFieldRefs;

  CausalEvent: Prisma.CausalEventFieldRefs;
  View: Prisma.ViewFieldRefs;
}

export type IFieldRefs<T extends NTTKey> = FieldRefs[T];
