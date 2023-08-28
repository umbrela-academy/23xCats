import { Prisma } from "@prisma/client";

export interface CountAggregateOutputType {
  Project: Prisma.ProjectCountAggregateOutputType;
  Org: Prisma.OrgCountAggregateOutputType;
  Person: Prisma.PersonCountAggregateOutputType;
  PeopleGroup: Prisma.PeopleGroupCountAggregateOutputType;

  IoDevice: Prisma.IoDeviceCountAggregateOutputType;
  IoSensor: Prisma.IoSensorCountAggregateOutputType;
  IoGroup: Prisma.IoGroupCountAggregateOutputType;
  IoHello: Prisma.IoHelloCountAggregateOutputType;
  IoFo: Prisma.IoFoCountAggregateOutputType;
}
