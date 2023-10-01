import { Prisma } from "@prisma/client";

export interface Inclusions {
  Project: Prisma.ProjectInclude;
  Org: Prisma.OrgInclude;
  Person: Prisma.PersonInclude;
  PeopleGroup: Prisma.PeopleGroupInclude;

  IoDevice: Prisma.IoDeviceInclude;
  IoSensor: Prisma.IoSensorInclude;
  IoGroup: Prisma.IoGroupInclude;
  IoHello: Prisma.IoHelloInclude;
  IoFo: Prisma.IoFoInclude;

  Word: Prisma.WordInclude;
  Syllable: Prisma.SyllableInclude;
  Spelling: Prisma.SpellingInclude;
  Meaning: Prisma.MeaningInclude;
  Usage: Prisma.UsageInclude;
  Phrase: Prisma.PhraseInclude;
  Sentence: Prisma.SentenceInclude;
  Para: Prisma.ParaInclude;

  Character: Prisma.CharacterInclude;
  CharacterBuilder: Prisma.CharacterBuilderInclude;
  Config: Prisma.ConfigInclude;
  ConfigTemplate: Prisma.ConfigTemplateInclude;
  Conflict: Prisma.ConflictInclude;
  ConflictResolutionPath: Prisma.ConflictResolutionPathInclude;

  TurningPoint: Prisma.TurningPointInclude;
  Objective: Prisma.ObjectiveInclude;
  Mission: Prisma.MissionInclude;
  Level: Prisma.LevelInclude;
  LegendMap: Prisma.LegendMapInclude;
  Power: Prisma.PowerInclude;
  Tool: Prisma.ToolInclude;
  Vehicle: Prisma.VehicleInclude;
  CharacterArch: Prisma.CharacterArchInclude;

  StoryLine: Prisma.StoryLineInclude;
  Modeler: Prisma.ModelerInclude;
  Action: Prisma.ActionInclude;
  State: Prisma.StateInclude;

  CausalEvent: Prisma.CausalEventInclude;
  View: Prisma.ViewInclude;

  Patient: Prisma.PatientInclude;
  Treatment: Prisma.TreatmentInclude;
  Therapy: Prisma.TherapyInclude;
  Surgery: Prisma.SurgeryInclude;
  Medication: Prisma.MedicationInclude;
  Remedy: Prisma.RemedyInclude;
  Equipment: Prisma.EquipmentInclude;
  Inventory: Prisma.InventoryInclude;
  Payment: Prisma.PaymentInclude;
  Quote: Prisma.QuoteInclude;
  Invoice: Prisma.InvoiceInclude;
  Receipt: Prisma.ReceiptInclude;
  TeamMember: Prisma.TeamMemberInclude;
  PayrollItem: Prisma.PayrollItemInclude;
}
