import { Prisma } from "@prisma/client";

export interface Selections {
  Project: Prisma.ProjectSelect;
  Org: Prisma.OrgSelect;
  Person: Prisma.PersonSelect;
  PeopleGroup: Prisma.PeopleGroupSelect;

  IoDevice: Prisma.IoDeviceSelect;
  IoSensor: Prisma.IoSensorSelect;
  IoGroup: Prisma.IoGroupSelect;
  IoHello: Prisma.IoHelloSelect;
  IoFo: Prisma.IoFoSelect;
}
