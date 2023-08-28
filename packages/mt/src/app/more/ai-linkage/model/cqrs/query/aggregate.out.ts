import { Prisma } from "@prisma/client";
import { Org, Project, Person, PeopleGroup, IoDevice, IoSensor, IoGroup, IoFo, IoHello } from '../../entities';
import { IAggregate } from "./aggregate.args";

export interface AggregateType {
  Project: Prisma.GetProjectAggregateType<IAggregate<typeof Project>>;
  Org: Prisma.GetOrgAggregateType<IAggregate<typeof Org>>;
  Person: Prisma.GetPersonAggregateType<IAggregate<typeof Person>>;
  PeopleGroup: Prisma.GetPeopleGroupAggregateType<IAggregate<typeof PeopleGroup>>;

  IoDevice: Prisma.GetIoDeviceAggregateType<IAggregate<typeof IoDevice>>;
  IoSensor: Prisma.GetIoSensorAggregateType<IAggregate<typeof IoSensor>>;
  IoGroup: Prisma.GetIoGroupAggregateType<IAggregate<typeof IoGroup>>;
  IoHello: Prisma.GetIoHelloAggregateType<IAggregate<typeof IoHello>>;
  IoFo: Prisma.GetIoFoAggregateType<IAggregate<typeof IoFo>>;
}
