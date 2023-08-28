import { Prisma } from "@prisma/client";
import { NTTKey } from "../../omega";

export interface CreateArgs {
  Project: Prisma.ProjectCreateArgs;
  Org: Prisma.OrgCreateArgs;
  Person: Prisma.PersonCreateArgs;
  PeopleGroup: Prisma.PeopleGroupCreateArgs;

  IoDevice: Prisma.IoDeviceCreateArgs;
  IoSensor: Prisma.IoSensorCreateArgs;
  IoGroup: Prisma.IoGroupCreateArgs;
  IoHello: Prisma.IoHelloCreateArgs;
  IoFo: Prisma.IoFoCreateArgs;
}
export type ICreate<NTT extends NTTKey> = CreateArgs[NTT];


export interface CreateManyArgs {
  Project: Prisma.ProjectCreateManyArgs;
  Org: Prisma.OrgCreateManyArgs;
  Person: Prisma.PersonCreateManyArgs;
  PeopleGroup: Prisma.PeopleGroupCreateManyArgs;

  IoDevice: Prisma.IoDeviceCreateManyArgs;
  IoSensor: Prisma.IoSensorCreateManyArgs;
  IoGroup: Prisma.IoGroupCreateManyArgs;
  IoHello: Prisma.IoHelloCreateManyArgs;
  IoFo: Prisma.IoFoCreateManyArgs;
}
export type ICreateMany<NTT extends NTTKey> = CreateManyArgs[NTT];