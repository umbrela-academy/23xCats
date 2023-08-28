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
}
export type IDeleteMany<NTT extends NTTKey> = DeleteManyArgs[NTT];
