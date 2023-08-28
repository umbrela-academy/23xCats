import { Prisma } from "@prisma/client";
import { NTTKey } from "../../omega";
import { Delegate } from "../../meta/delegates";

export interface AggregateArgs {
  Project: Prisma.ProjectAggregateArgs;
  Org: Prisma.OrgAggregateArgs;
  Person: Prisma.PersonAggregateArgs;
  PeopleGroup: Prisma.PeopleGroupAggregateArgs;

  IoDevice: Prisma.IoDeviceAggregateArgs;
  IoSensor: Prisma.IoSensorAggregateArgs;
  IoGroup: Prisma.IoGroupAggregateArgs;
  IoHello: Prisma.IoHelloAggregateArgs;
  IoFo: Prisma.IoFoAggregateArgs;
}

export type IAggregate<T extends NTTKey> = AggregateArgs[T];

export type IGroupBy<NTT extends NTTKey> = Parameters<
  Delegate<NTT>['groupBy']
>;