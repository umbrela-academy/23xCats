import { Prisma } from "@prisma/client";
import { NTTKey } from "../../omega";

export interface CountArgs {
  Project: Prisma.ProjectCountArgs;
  Org: Prisma.OrgCountArgs;
  Person: Prisma.PersonCountArgs;
  PeopleGroup: Prisma.PeopleGroupCountArgs;

  IoDevice: Prisma.IoDeviceCountArgs;
  IoSensor: Prisma.IoSensorCountArgs;
  IoGroup: Prisma.IoGroupCountArgs;
  IoHello: Prisma.IoHelloCountArgs;
  IoFo: Prisma.IoFoCountArgs;
  
  Word: Prisma.WordCountArgs;
  Syllable: Prisma.SyllableCountArgs;
  Spelling: Prisma.SpellingCountArgs;
  Meaning: Prisma.MeaningCountArgs;
  Usage: Prisma.UsageCountArgs;
  Phrase: Prisma.PhraseCountArgs;
  Sentence: Prisma.SentenceCountArgs;
  Para: Prisma.ParaCountArgs;

  Character: Prisma.CharacterCountArgs;
  CharacterBuilder: Prisma.CharacterBuilderCountArgs;
  Config: Prisma.ConfigCountArgs;
  ConfigTemplate: Prisma.ConfigTemplateCountArgs;
  Conflict: Prisma.ConflictCountArgs;
  ConflictResolutionPath: Prisma.ConflictResolutionPathCountArgs;

  TurningPoint: Prisma.TurningPointCountArgs;
  Objective: Prisma.ObjectiveCountArgs;
  Mission: Prisma.MissionCountArgs;
  Level: Prisma.LevelCountArgs;
  LegendMap: Prisma.LegendMapCountArgs;
  Power: Prisma.PowerCountArgs;
  Tool: Prisma.ToolCountArgs;
  Vehicle: Prisma.VehicleCountArgs;
  CharacterArch: Prisma.CharacterArchCountArgs;

  StoryLine: Prisma.StoryLineCountArgs;
  Modeler: Prisma.ModelerCountArgs;
  Action: Prisma.ActionCountArgs;
  State: Prisma.StateCountArgs;

  CausalEvent: Prisma.CausalEventCountArgs;
  View: Prisma.ViewCountArgs;

  Patient: Prisma.PatientCountArgs;
  Treatment: Prisma.TreatmentCountArgs;
  Therapy: Prisma.TherapyCountArgs;
  Surgery: Prisma.SurgeryCountArgs;
  Medication: Prisma.MedicationCountArgs;
  Remedy: Prisma.RemedyCountArgs;
  Equipment: Prisma.EquipmentCountArgs;
  Inventory: Prisma.InventoryCountArgs;
  Payment: Prisma.PaymentCountArgs;
  Quote: Prisma.QuoteCountArgs;
  Invoice: Prisma.InvoiceCountArgs;
  Receipt: Prisma.ReceiptCountArgs;
  TeamMember: Prisma.TeamMemberCountArgs;
  PayrollItem: Prisma.PayrollItemCountArgs;
}

export type ICount<T extends NTTKey> = CountArgs[T];