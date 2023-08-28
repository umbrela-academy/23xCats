import { Prisma } from "@prisma/client";
import { NTTKey } from "../../omega";

export interface UpdateArgs {
  Project: Prisma.ProjectUpdateArgs;
  Org: Prisma.OrgUpdateArgs;
  Person: Prisma.PersonUpdateArgs;
  PeopleGroup: Prisma.PeopleGroupUpdateArgs;

  IoDevice: Prisma.IoDeviceUpdateArgs;
  IoSensor: Prisma.IoSensorUpdateArgs;
  IoGroup: Prisma.IoGroupUpdateArgs;
  IoHello: Prisma.IoHelloUpdateArgs;
  IoFo: Prisma.IoFoUpdateArgs;
}
export type IUpdate<NTT extends NTTKey> = UpdateArgs[NTT];

export interface UpdateManyArgs {
  Project: Prisma.ProjectUpdateManyArgs;
  Org: Prisma.OrgUpdateManyArgs;
  Person: Prisma.PersonUpdateManyArgs;
  PeopleGroup: Prisma.PeopleGroupUpdateManyArgs;

  IoDevice: Prisma.IoDeviceUpdateManyArgs;
  IoSensor: Prisma.IoSensorUpdateManyArgs;
  IoGroup: Prisma.IoGroupUpdateManyArgs;
  IoHello: Prisma.IoHelloUpdateManyArgs;
  IoFo: Prisma.IoFoUpdateManyArgs;
}
export type IUpdateMany<NTT extends NTTKey> = UpdateManyArgs[NTT];