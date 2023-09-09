import { Prisma } from "@prisma/client";

export interface Selections {
  Project: Prisma.ProjectSelect;
  Org: Prisma.OrgSelect;
  Person: Prisma.PersonSelect;
  PeopleGroup: Prisma.PeopleGroupSelect;

  IoDevice: Prisma.IoDeviceSelect;
  IoSensor: Prisma.IoSensorSelect;
  IoGroup: Prisma.IoGroupSelect;
  IoHello: Prisma.IoHelloSelect;
  IoFo: Prisma.IoFoSelect;

  Word: Prisma.WordSelect;
  Syllable: Prisma.SyllableSelect;
  Spelling: Prisma.SpellingSelect;
  Meaning: Prisma.MeaningSelect;
  Usage: Prisma.UsageSelect;
  Phrase: Prisma.PhraseSelect;
  Sentence: Prisma.SentenceSelect;
  Para: Prisma.ParaSelect;

  Character: Prisma.CharacterSelect;
  CharacterBuilder: Prisma.CharacterBuilderSelect;
  Config: Prisma.ConfigSelect;
  ConfigTemplate: Prisma.ConfigTemplateSelect;
  Conflict: Prisma.ConflictSelect;
  ConflictResolutionPath: Prisma.ConflictResolutionPathSelect;

  TurningPoint: Prisma.TurningPointSelect;
  Objective: Prisma.ObjectiveSelect;
  Mission: Prisma.MissionSelect;
  Level: Prisma.LevelSelect;
  LegendMap: Prisma.LegendMapSelect;
  Power: Prisma.PowerSelect;
  Tool: Prisma.ToolSelect;
  Vehicle: Prisma.VehicleSelect;
  CharacterArch: Prisma.CharacterArchSelect;

  StoryLine: Prisma.StoryLineSelect;
  Modeler: Prisma.ModelerSelect;
  Action: Prisma.ActionSelect;
  State: Prisma.StateSelect;

  CausalEvent: Prisma.CausalEventSelect;
  View: Prisma.ViewSelect;
}
