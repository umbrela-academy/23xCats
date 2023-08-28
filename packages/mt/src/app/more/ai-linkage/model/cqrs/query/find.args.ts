import { Prisma } from "@prisma/client";
import { NTTKey } from "../../omega";

export interface FindUniqueArgs {

  Project: Prisma.ProjectFindUniqueArgs;
  Org: Prisma.OrgFindUniqueArgs;
  Person: Prisma.PersonFindUniqueArgs;
  PeopleGroup: Prisma.PeopleGroupFindUniqueArgs;

  IoDevice: Prisma.IoDeviceFindUniqueArgs;
  IoSensor: Prisma.IoSensorFindUniqueArgs;
  IoGroup: Prisma.IoGroupFindUniqueArgs;
  IoHello: Prisma.IoHelloFindUniqueArgs;
  IoFo: Prisma.IoFoFindUniqueArgs;
}
export type IFindUnique<T extends NTTKey> = FindUniqueArgs[T];

export interface FindFirstArgs {
  Project: Prisma.ProjectFindFirstArgs;
  Org: Prisma.OrgFindFirstArgs;
  Person: Prisma.PersonFindFirstArgs;
  PeopleGroup: Prisma.PeopleGroupFindFirstArgs;

  IoDevice: Prisma.IoDeviceFindFirstArgs;
  IoSensor: Prisma.IoSensorFindFirstArgs;
  IoGroup: Prisma.IoGroupFindFirstArgs;
  IoHello: Prisma.IoHelloFindFirstArgs;
  IoFo: Prisma.IoFoFindFirstArgs;
}
export type IFindFirst<T extends NTTKey> = FindFirstArgs[T];

export interface FindManyArgs {
  Project: Prisma.ProjectFindManyArgs;
  Org: Prisma.OrgFindManyArgs;
  Person: Prisma.PersonFindManyArgs;
  PeopleGroup: Prisma.PeopleGroupFindManyArgs;

  IoDevice: Prisma.IoDeviceFindManyArgs;
  IoSensor: Prisma.IoSensorFindManyArgs;
  IoGroup: Prisma.IoGroupFindManyArgs;
  IoHello: Prisma.IoHelloFindManyArgs;
  IoFo: Prisma.IoFoFindManyArgs;
}
export type IFindMany<T extends NTTKey> = FindManyArgs[T];