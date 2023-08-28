import { Prisma } from "@prisma/client";
import { NTTKey } from "../omega";

export interface Delegates {
  Project: Prisma.ProjectDelegate;
  Org: Prisma.OrgDelegate;
  Person: Prisma.PersonDelegate;
  PeopleGroup: Prisma.PeopleGroupDelegate;

  IoDevice: Prisma.IoDeviceDelegate;
  IoSensor: Prisma.IoSensorDelegate;
  IoGroup: Prisma.IoGroupDelegate;
  IoHello: Prisma.IoHelloDelegate;
  IoFo: Prisma.IoFoDelegate;
}
export type Delegate<T extends NTTKey> = Delegates[T];