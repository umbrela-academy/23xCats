import { Prisma } from "@prisma/client";
import { NTTKey } from "../../omega";

export interface DeleteArgs {
  Project: Prisma.ProjectDeleteArgs;
  Org: Prisma.OrgDeleteArgs;
  Person: Prisma.PersonDeleteArgs;
  PeopleGroup: Prisma.PeopleGroupDeleteArgs;

  IoDevice: Prisma.IoDeviceDeleteArgs;
  IoSensor: Prisma.IoSensorDeleteArgs;
  IoGroup: Prisma.IoGroupDeleteArgs;
  IoHello: Prisma.IoHelloDeleteArgs;
  IoFo: Prisma.IoFoDeleteArgs;

  Word: Prisma.WordDeleteArgs;
  Syllable: Prisma.SyllableDeleteArgs;
  Spelling: Prisma.SpellingDeleteArgs;
  Meaning: Prisma.MeaningDeleteArgs;
  Usage: Prisma.UsageDeleteArgs;
  Phrase: Prisma.PhraseDeleteArgs;
  Sentence: Prisma.SentenceDeleteArgs;
  Para: Prisma.ParaDeleteArgs;

  Character: Prisma.CharacterDeleteArgs;
  CharacterBuilder: Prisma.CharacterBuilderDeleteArgs;
  Config: Prisma.ConfigDeleteArgs;
  ConfigTemplate: Prisma.ConfigTemplateDeleteArgs;
  Conflict: Prisma.ConflictDeleteArgs;
  ConflictResolutionPath: Prisma.ConflictResolutionPathDeleteArgs;

  TurningPoint: Prisma.TurningPointDeleteArgs;
  Objective: Prisma.ObjectiveDeleteArgs;
  Mission: Prisma.MissionDeleteArgs;
  Level: Prisma.LevelDeleteArgs;
  LegendMap: Prisma.LegendMapDeleteArgs;
  Power: Prisma.PowerDeleteArgs;
  Tool: Prisma.ToolDeleteArgs;
  Vehicle: Prisma.VehicleDeleteArgs;
  CharacterArch: Prisma.CharacterArchDeleteArgs;

  StoryLine: Prisma.StoryLineDeleteArgs;
  Modeler: Prisma.ModelerDeleteArgs;
  Action: Prisma.ActionDeleteArgs;
  State: Prisma.StateDeleteArgs;

  CausalEvent: Prisma.CausalEventDeleteArgs;
  View: Prisma.ViewDeleteArgs;

  Patient: Prisma.PatientDeleteArgs;
  Treatment: Prisma.TreatmentDeleteArgs;
  Therapy: Prisma.TherapyDeleteArgs;
  Surgery: Prisma.SurgeryDeleteArgs;
  Medication: Prisma.MedicationDeleteArgs;
  Remedy: Prisma.RemedyDeleteArgs;
  Equipment: Prisma.EquipmentDeleteArgs;
  Inventory: Prisma.InventoryDeleteArgs;
  Payment: Prisma.PaymentDeleteArgs;
  Quote: Prisma.QuoteDeleteArgs;
  Invoice: Prisma.InvoiceDeleteArgs;
  Receipt: Prisma.ReceiptDeleteArgs;
  TeamMember: Prisma.TeamMemberDeleteArgs;
  PayrollItem: Prisma.PayrollItemDeleteArgs;
}
export type IDelete<NTT extends NTTKey> = DeleteArgs[NTT];

export interface DeleteManyArgs {
  Project: Prisma.ProjectDeleteManyArgs;
  Org: Prisma.OrgDeleteManyArgs;
  Person: Prisma.PersonDeleteManyArgs;
  PeopleGroup: Prisma.PeopleGroupDeleteManyArgs;

  IoDevice: Prisma.IoDeviceDeleteManyArgs;
  IoSensor: Prisma.IoSensorDeleteManyArgs;
  IoGroup: Prisma.IoGroupDeleteManyArgs;
  IoHello: Prisma.IoHelloDeleteManyArgs;
  IoFo: Prisma.IoFoDeleteManyArgs;

  Word: Prisma.WordDeleteManyArgs;
  Syllable: Prisma.SyllableDeleteManyArgs;
  Spelling: Prisma.SpellingDeleteManyArgs;
  Meaning: Prisma.MeaningDeleteManyArgs;
  Usage: Prisma.UsageDeleteManyArgs;
  Phrase: Prisma.PhraseDeleteManyArgs;
  Sentence: Prisma.SentenceDeleteManyArgs;
  Para: Prisma.ParaDeleteManyArgs;

  Character: Prisma.CharacterDeleteManyArgs;
  CharacterBuilder: Prisma.CharacterBuilderDeleteManyArgs;
  Config: Prisma.ConfigDeleteManyArgs;
  ConfigTemplate: Prisma.ConfigTemplateDeleteManyArgs;
  Conflict: Prisma.ConflictDeleteManyArgs;
  ConflictResolutionPath: Prisma.ConflictResolutionPathDeleteManyArgs;

  TurningPoint: Prisma.TurningPointDeleteManyArgs;
  Objective: Prisma.ObjectiveDeleteManyArgs;
  Mission: Prisma.MissionDeleteManyArgs;
  Level: Prisma.LevelDeleteManyArgs;
  LegendMap: Prisma.LegendMapDeleteManyArgs;
  Power: Prisma.PowerDeleteManyArgs;
  Tool: Prisma.ToolDeleteManyArgs;
  Vehicle: Prisma.VehicleDeleteManyArgs;
  CharacterArch: Prisma.CharacterArchDeleteManyArgs;

  StoryLine: Prisma.StoryLineDeleteManyArgs;
  Modeler: Prisma.ModelerDeleteManyArgs;
  Action: Prisma.ActionDeleteManyArgs;
  State: Prisma.StateDeleteManyArgs;

  CausalEvent: Prisma.CausalEventDeleteManyArgs;
  View: Prisma.ViewDeleteManyArgs;

  Patient: Prisma.PatientDeleteManyArgs;
  Treatment: Prisma.TreatmentDeleteManyArgs;
  Therapy: Prisma.TherapyDeleteManyArgs;
  Surgery: Prisma.SurgeryDeleteManyArgs;
  Medication: Prisma.MedicationDeleteManyArgs;
  Remedy: Prisma.RemedyDeleteManyArgs;
  Equipment: Prisma.EquipmentDeleteManyArgs;
  Inventory: Prisma.InventoryDeleteManyArgs;
  Payment: Prisma.PaymentDeleteManyArgs;
  Quote: Prisma.QuoteDeleteManyArgs;
  Invoice: Prisma.InvoiceDeleteManyArgs;
  Receipt: Prisma.ReceiptDeleteManyArgs;
  TeamMember: Prisma.TeamMemberDeleteManyArgs;
  PayrollItem: Prisma.PayrollItemDeleteManyArgs;
}
export type IDeleteMany<NTT extends NTTKey> = DeleteManyArgs[NTT];
