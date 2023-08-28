import { Prisma } from "@prisma/client";
import { NTTKey } from "../../omega";

export interface FieldRefs {
  Project: Prisma.ProjectFieldRefs;
  Org: Prisma.OrgFieldRefs;
  Person: Prisma.PersonFieldRefs;
  PeopleGroup: Prisma.PeopleGroupFieldRefs;

  IoDevice: Prisma.IoDeviceFieldRefs;
  IoSensor: Prisma.IoSensorFieldRefs;
  IoGroup: Prisma.IoGroupFieldRefs;
  IoHello: Prisma.IoHelloFieldRefs;
  IoFo: Prisma.IoFoFieldRefs;
}

export type IFieldRefs<T extends NTTKey> = FieldRefs[T];
