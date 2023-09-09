import { Prisma } from "@prisma/client";
import {
  Action,
  CausalEvent,
  Character,
  CharacterArch,
  CharacterBuilder,
  Config,
  ConfigTemplate,
  Conflict,
  ConflictResolutionPath,
  IoDevice,
  IoFo,
  IoGroup,
  IoHello,
  IoSensor,
  LegendMap,
  Level,
  Meaning,
  Mission,
  Modeler,
  Objective,
  Org,
  Para,
  PeopleGroup,
  Person,
  Phrase,
  Power,
  Project,
  Sentence,
  Spelling,
  State,
  StoryLine,
  Syllable,
  Tool,
  TurningPoint,
  Usage,
  Vehicle,
  View,
  Word
} from '../../entities';
import { IAggregate } from "./aggregate.args";

export interface AggregateType {
  Project: Prisma.GetProjectAggregateType<IAggregate<typeof Project>>;
  Org: Prisma.GetOrgAggregateType<IAggregate<typeof Org>>;
  Person: Prisma.GetPersonAggregateType<IAggregate<typeof Person>>;
  PeopleGroup: Prisma.GetPeopleGroupAggregateType<
    IAggregate<typeof PeopleGroup>
  >;

  IoDevice: Prisma.GetIoDeviceAggregateType<IAggregate<typeof IoDevice>>;
  IoSensor: Prisma.GetIoSensorAggregateType<IAggregate<typeof IoSensor>>;
  IoGroup: Prisma.GetIoGroupAggregateType<IAggregate<typeof IoGroup>>;
  IoHello: Prisma.GetIoHelloAggregateType<IAggregate<typeof IoHello>>;
  IoFo: Prisma.GetIoFoAggregateType<IAggregate<typeof IoFo>>;

  Word: Prisma.GetWordAggregateType<IAggregate<typeof Word>>;
  Syllable: Prisma.GetSyllableAggregateType<IAggregate<typeof Syllable>>;
  Spelling: Prisma.GetSpellingAggregateType<IAggregate<typeof Spelling>>;
  Meaning: Prisma.GetMeaningAggregateType<IAggregate<typeof Meaning>>;
  Usage: Prisma.GetUsageAggregateType<IAggregate<typeof Usage>>;
  Phrase: Prisma.GetPhraseAggregateType<IAggregate<typeof Phrase>>;
  Sentence: Prisma.GetSentenceAggregateType<IAggregate<typeof Sentence>>;
  Para: Prisma.GetParaAggregateType<IAggregate<typeof Para>>;

  Character: Prisma.GetCharacterAggregateType<IAggregate<typeof Character>>;
  CharacterBuilder: Prisma.GetCharacterBuilderAggregateType<IAggregate<typeof CharacterBuilder>>;
  Config: Prisma.GetConfigAggregateType<IAggregate<typeof Config>>;
  ConfigTemplate: Prisma.GetConfigTemplateAggregateType<IAggregate<typeof ConfigTemplate>>;
  Conflict: Prisma.GetConflictAggregateType<IAggregate<typeof Conflict>>;
  ConflictResolutionPath: Prisma.GetConflictResolutionPathAggregateType<IAggregate<typeof ConflictResolutionPath>>;

  TurningPoint: Prisma.GetTurningPointAggregateType<IAggregate<typeof TurningPoint>>;
  Objective: Prisma.GetObjectiveAggregateType<IAggregate<typeof Objective>>;
  Mission: Prisma.GetMissionAggregateType<IAggregate<typeof Mission>>;
  Level: Prisma.GetLevelAggregateType<IAggregate<typeof Level>>;
  LegendMap: Prisma.GetLegendMapAggregateType<IAggregate<typeof LegendMap>>;
  Power: Prisma.GetPowerAggregateType<IAggregate<typeof Power>>;
  Tool: Prisma.GetToolAggregateType<IAggregate<typeof Tool>>;
  Vehicle: Prisma.GetVehicleAggregateType<IAggregate<typeof Vehicle>>;
  CharacterArch: Prisma.GetCharacterArchAggregateType<IAggregate<typeof CharacterArch>>;

  StoryLine: Prisma.GetStoryLineAggregateType<IAggregate<typeof StoryLine>>;
  Modeler: Prisma.GetModelerAggregateType<IAggregate<typeof Modeler>>;
  Action: Prisma.GetActionAggregateType<IAggregate<typeof Action>>;
  State: Prisma.GetStateAggregateType<IAggregate<typeof State>>;

  CausalEvent: Prisma.GetCausalEventAggregateType<IAggregate<typeof CausalEvent>>;
  View: Prisma.GetViewAggregateType<IAggregate<typeof View>>;
}
