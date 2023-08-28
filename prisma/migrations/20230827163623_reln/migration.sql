/*
  Warnings:

  - You are about to drop the `IODevice` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `IOSensor` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PeopleGroup` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Project` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Project" DROP CONSTRAINT "Project_initiatorOrgId_fkey";

-- DropForeignKey
ALTER TABLE "_OrgToProject" DROP CONSTRAINT "_OrgToProject_B_fkey";

-- DropForeignKey
ALTER TABLE "_PeopleGroupToPerson" DROP CONSTRAINT "_PeopleGroupToPerson_A_fkey";

-- DropForeignKey
ALTER TABLE "_input_devices" DROP CONSTRAINT "_input_devices_A_fkey";

-- DropForeignKey
ALTER TABLE "_input_devices" DROP CONSTRAINT "_input_devices_B_fkey";

-- DropForeignKey
ALTER TABLE "_input_sensors" DROP CONSTRAINT "_input_sensors_A_fkey";

-- DropForeignKey
ALTER TABLE "_input_sensors" DROP CONSTRAINT "_input_sensors_B_fkey";

-- DropForeignKey
ALTER TABLE "_output_devices" DROP CONSTRAINT "_output_devices_A_fkey";

-- DropForeignKey
ALTER TABLE "_output_devices" DROP CONSTRAINT "_output_devices_B_fkey";

-- DropForeignKey
ALTER TABLE "_output_sensors" DROP CONSTRAINT "_output_sensors_A_fkey";

-- DropForeignKey
ALTER TABLE "_output_sensors" DROP CONSTRAINT "_output_sensors_B_fkey";

-- DropTable
DROP TABLE "IODevice";

-- DropTable
DROP TABLE "IOSensor";

-- DropTable
DROP TABLE "PeopleGroup";

-- DropTable
DROP TABLE "Project";

-- CreateTable
CREATE TABLE "project" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "initiator_org_id" UUID NOT NULL,

    CONSTRAINT "project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "io_hello" (
    "id" UUID NOT NULL,
    "type" TEXT NOT NULL,
    "version" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "protocols" TEXT[],
    "credentials_url" TEXT NOT NULL,

    CONSTRAINT "io_hello_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "io_fo" (
    "id" UUID NOT NULL,
    "helloId" UUID NOT NULL,

    CONSTRAINT "io_fo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "io_device" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "type" TEXT,
    "version" TEXT,
    "model" TEXT,
    "ioGroupId" UUID NOT NULL,

    CONSTRAINT "io_device_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "io_sensor" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "type" TEXT,
    "version" TEXT,
    "model" TEXT,
    "ioGroupId" UUID NOT NULL,

    CONSTRAINT "io_sensor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "io_group" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "io_group_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "people_group" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "people_group_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_to_hello" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateTable
CREATE TABLE "_to_fo" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateTable
CREATE TABLE "_IoGroupToProject" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "project_name_key" ON "project"("name");

-- CreateIndex
CREATE UNIQUE INDEX "io_fo_helloId_key" ON "io_fo"("helloId");

-- CreateIndex
CREATE UNIQUE INDEX "io_device_name_key" ON "io_device"("name");

-- CreateIndex
CREATE UNIQUE INDEX "io_device_ioGroupId_key" ON "io_device"("ioGroupId");

-- CreateIndex
CREATE UNIQUE INDEX "io_sensor_name_key" ON "io_sensor"("name");

-- CreateIndex
CREATE UNIQUE INDEX "io_sensor_ioGroupId_key" ON "io_sensor"("ioGroupId");

-- CreateIndex
CREATE UNIQUE INDEX "io_group_name_key" ON "io_group"("name");

-- CreateIndex
CREATE UNIQUE INDEX "people_group_name_key" ON "people_group"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_to_hello_AB_unique" ON "_to_hello"("A", "B");

-- CreateIndex
CREATE INDEX "_to_hello_B_index" ON "_to_hello"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_to_fo_AB_unique" ON "_to_fo"("A", "B");

-- CreateIndex
CREATE INDEX "_to_fo_B_index" ON "_to_fo"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_IoGroupToProject_AB_unique" ON "_IoGroupToProject"("A", "B");

-- CreateIndex
CREATE INDEX "_IoGroupToProject_B_index" ON "_IoGroupToProject"("B");

-- AddForeignKey
ALTER TABLE "project" ADD CONSTRAINT "project_initiator_org_id_fkey" FOREIGN KEY ("initiator_org_id") REFERENCES "Org"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "io_fo" ADD CONSTRAINT "io_fo_helloId_fkey" FOREIGN KEY ("helloId") REFERENCES "io_hello"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "io_device" ADD CONSTRAINT "io_device_ioGroupId_fkey" FOREIGN KEY ("ioGroupId") REFERENCES "io_group"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "io_sensor" ADD CONSTRAINT "io_sensor_ioGroupId_fkey" FOREIGN KEY ("ioGroupId") REFERENCES "io_group"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_to_hello" ADD CONSTRAINT "_to_hello_A_fkey" FOREIGN KEY ("A") REFERENCES "io_device"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_to_hello" ADD CONSTRAINT "_to_hello_B_fkey" FOREIGN KEY ("B") REFERENCES "io_hello"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_to_fo" ADD CONSTRAINT "_to_fo_A_fkey" FOREIGN KEY ("A") REFERENCES "io_device"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_to_fo" ADD CONSTRAINT "_to_fo_B_fkey" FOREIGN KEY ("B") REFERENCES "io_fo"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_input_devices" ADD CONSTRAINT "_input_devices_A_fkey" FOREIGN KEY ("A") REFERENCES "io_device"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_input_devices" ADD CONSTRAINT "_input_devices_B_fkey" FOREIGN KEY ("B") REFERENCES "project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_output_devices" ADD CONSTRAINT "_output_devices_A_fkey" FOREIGN KEY ("A") REFERENCES "io_device"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_output_devices" ADD CONSTRAINT "_output_devices_B_fkey" FOREIGN KEY ("B") REFERENCES "project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_input_sensors" ADD CONSTRAINT "_input_sensors_A_fkey" FOREIGN KEY ("A") REFERENCES "io_sensor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_input_sensors" ADD CONSTRAINT "_input_sensors_B_fkey" FOREIGN KEY ("B") REFERENCES "project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_output_sensors" ADD CONSTRAINT "_output_sensors_A_fkey" FOREIGN KEY ("A") REFERENCES "io_sensor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_output_sensors" ADD CONSTRAINT "_output_sensors_B_fkey" FOREIGN KEY ("B") REFERENCES "project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_IoGroupToProject" ADD CONSTRAINT "_IoGroupToProject_A_fkey" FOREIGN KEY ("A") REFERENCES "io_group"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_IoGroupToProject" ADD CONSTRAINT "_IoGroupToProject_B_fkey" FOREIGN KEY ("B") REFERENCES "project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgToProject" ADD CONSTRAINT "_OrgToProject_B_fkey" FOREIGN KEY ("B") REFERENCES "project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PeopleGroupToPerson" ADD CONSTRAINT "_PeopleGroupToPerson_A_fkey" FOREIGN KEY ("A") REFERENCES "people_group"("id") ON DELETE CASCADE ON UPDATE CASCADE;
