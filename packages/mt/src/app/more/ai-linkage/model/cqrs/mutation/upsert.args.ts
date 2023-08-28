import { Prisma } from "@prisma/client";
import { NTTKey } from "../../omega";

export interface UpsertArgs {
  Project: Prisma.ProjectUpsertArgs;
  Org: Prisma.OrgUpsertArgs;
  Person: Prisma.PersonUpsertArgs;
  PeopleGroup: Prisma.PeopleGroupUpsertArgs;

  IoDevice: Prisma.IoDeviceUpsertArgs;
  IoSensor: Prisma.IoSensorUpsertArgs;
  IoGroup: Prisma.IoGroupUpsertArgs;
  IoHello: Prisma.IoHelloUpsertArgs;
  IoFo: Prisma.IoFoUpsertArgs;
}
export type IUpsert<NTT extends NTTKey> = UpsertArgs[NTT];