/*
  Warnings:

  - You are about to drop the `People` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "People";

-- CreateTable
CREATE TABLE "IOSensor" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "type" TEXT,
    "version" TEXT,
    "model" TEXT,

    CONSTRAINT "IOSensor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PeopleGroup" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "PeopleGroup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_input_sensors" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateTable
CREATE TABLE "_output_sensors" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateTable
CREATE TABLE "_leading" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateTable
CREATE TABLE "_membering" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateTable
CREATE TABLE "_PeopleGroupToPerson" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "IOSensor_name_key" ON "IOSensor"("name");

-- CreateIndex
CREATE UNIQUE INDEX "PeopleGroup_name_key" ON "PeopleGroup"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_input_sensors_AB_unique" ON "_input_sensors"("A", "B");

-- CreateIndex
CREATE INDEX "_input_sensors_B_index" ON "_input_sensors"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_output_sensors_AB_unique" ON "_output_sensors"("A", "B");

-- CreateIndex
CREATE INDEX "_output_sensors_B_index" ON "_output_sensors"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_leading_AB_unique" ON "_leading"("A", "B");

-- CreateIndex
CREATE INDEX "_leading_B_index" ON "_leading"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_membering_AB_unique" ON "_membering"("A", "B");

-- CreateIndex
CREATE INDEX "_membering_B_index" ON "_membering"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PeopleGroupToPerson_AB_unique" ON "_PeopleGroupToPerson"("A", "B");

-- CreateIndex
CREATE INDEX "_PeopleGroupToPerson_B_index" ON "_PeopleGroupToPerson"("B");

-- AddForeignKey
ALTER TABLE "_input_sensors" ADD CONSTRAINT "_input_sensors_A_fkey" FOREIGN KEY ("A") REFERENCES "IOSensor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_input_sensors" ADD CONSTRAINT "_input_sensors_B_fkey" FOREIGN KEY ("B") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_output_sensors" ADD CONSTRAINT "_output_sensors_A_fkey" FOREIGN KEY ("A") REFERENCES "IOSensor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_output_sensors" ADD CONSTRAINT "_output_sensors_B_fkey" FOREIGN KEY ("B") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_leading" ADD CONSTRAINT "_leading_A_fkey" FOREIGN KEY ("A") REFERENCES "Org"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_leading" ADD CONSTRAINT "_leading_B_fkey" FOREIGN KEY ("B") REFERENCES "Person"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_membering" ADD CONSTRAINT "_membering_A_fkey" FOREIGN KEY ("A") REFERENCES "Org"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_membering" ADD CONSTRAINT "_membering_B_fkey" FOREIGN KEY ("B") REFERENCES "Person"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PeopleGroupToPerson" ADD CONSTRAINT "_PeopleGroupToPerson_A_fkey" FOREIGN KEY ("A") REFERENCES "PeopleGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PeopleGroupToPerson" ADD CONSTRAINT "_PeopleGroupToPerson_B_fkey" FOREIGN KEY ("B") REFERENCES "Person"("id") ON DELETE CASCADE ON UPDATE CASCADE;
