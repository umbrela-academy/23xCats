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

  Patient: Prisma.PatientFieldRefs;
  Treatment: Prisma.TreatmentFieldRefs;
  Therapy: Prisma.TherapyFieldRefs;
  Surgery: Prisma.SurgeryFieldRefs;
  Medication: Prisma.MedicationFieldRefs;
  Remedy: Prisma.RemedyFieldRefs;
  Equipment: Prisma.EquipmentFieldRefs;
  Inventory: Prisma.InventoryFieldRefs;
  Payment: Prisma.PaymentFieldRefs;
  Quote: Prisma.QuoteFieldRefs;
  Invoice: Prisma.InvoiceFieldRefs;
  Receipt: Prisma.ReceiptFieldRefs;
  TeamMember: Prisma.TeamMemberFieldRefs;
  PayrollItem: Prisma.PayrollItemFieldRefs;
}

export type IFieldRefs<T extends NTTKey> = FieldRefs[T];
