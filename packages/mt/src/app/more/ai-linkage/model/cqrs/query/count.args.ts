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
}

export type ICount<T extends NTTKey> = CountArgs[T];