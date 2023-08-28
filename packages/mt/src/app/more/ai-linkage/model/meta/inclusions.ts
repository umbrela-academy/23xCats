import { Prisma } from "@prisma/client";

export interface Inclusions {
  Project: Prisma.ProjectInclude;
  Org: Prisma.OrgInclude;
  Person: Prisma.PersonInclude;
  PeopleGroup: Prisma.PeopleGroupInclude;

  IoDevice: Prisma.IoDeviceInclude;
  IoSensor: Prisma.IoSensorInclude;
  IoGroup: Prisma.IoGroupInclude;
  IoHello: Prisma.IoHelloInclude;
  IoFo: Prisma.IoFoInclude;
}
