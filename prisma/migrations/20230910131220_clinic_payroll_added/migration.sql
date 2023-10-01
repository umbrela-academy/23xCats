/*
  Warnings:

  - You are about to drop the column `inventoryId` on the `equipment` table. All the data in the column will be lost.
  - You are about to drop the column `personId` on the `patient` table. All the data in the column will be lost.
  - You are about to drop the column `publicId` on the `patient` table. All the data in the column will be lost.
  - You are about to drop the column `patientId` on the `treatment` table. All the data in the column will be lost.
  - You are about to drop the column `totalCost` on the `treatment` table. All the data in the column will be lost.
  - You are about to drop the `_treatment_payments` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[public_id]` on the table `patient` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[person_id]` on the table `patient` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[treatment_id]` on the table `payment` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `inventory_id` to the `equipment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `person_id` to the `patient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `treatment_id` to the `payment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `patient_id` to the `treatment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total_cost` to the `treatment` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_treatment_payments" DROP CONSTRAINT "_treatment_payments_A_fkey";

-- DropForeignKey
ALTER TABLE "_treatment_payments" DROP CONSTRAINT "_treatment_payments_B_fkey";

-- DropForeignKey
ALTER TABLE "equipment" DROP CONSTRAINT "equipment_inventoryId_fkey";

-- DropForeignKey
ALTER TABLE "patient" DROP CONSTRAINT "patient_personId_fkey";

-- DropForeignKey
ALTER TABLE "treatment" DROP CONSTRAINT "treatment_patientId_fkey";

-- DropIndex
DROP INDEX "patient_personId_key";

-- DropIndex
DROP INDEX "patient_publicId_key";

-- AlterTable
ALTER TABLE "equipment" DROP COLUMN "inventoryId",
ADD COLUMN     "inventory_id" UUID NOT NULL;

-- AlterTable
ALTER TABLE "patient" DROP COLUMN "personId",
DROP COLUMN "publicId",
ADD COLUMN     "person_id" UUID NOT NULL,
ADD COLUMN     "public_id" TEXT;

-- AlterTable
ALTER TABLE "payment" ADD COLUMN     "treatment_id" UUID NOT NULL;

-- AlterTable
ALTER TABLE "treatment" DROP COLUMN "patientId",
DROP COLUMN "totalCost",
ADD COLUMN     "patient_id" UUID NOT NULL,
ADD COLUMN     "total_cost" DECIMAL(65,30) NOT NULL;

-- DropTable
DROP TABLE "_treatment_payments";

-- CreateTable
CREATE TABLE "team_member" (
    "id" UUID NOT NULL,
    "salary" DECIMAL(65,30) NOT NULL,
    "ingress_time" TIMESTAMP(3),
    "egress_time" TIMESTAMP(3),
    "loan" DECIMAL(65,30),
    "person_id" UUID NOT NULL,

    CONSTRAINT "team_member_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "payroll_item" (
    "id" UUID NOT NULL,
    "deficit" DECIMAL(65,30),
    "payment_date" TIMESTAMP(3) NOT NULL,
    "team_member_id" UUID NOT NULL,

    CONSTRAINT "payroll_item_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "team_member_person_id_key" ON "team_member"("person_id");

-- CreateIndex
CREATE UNIQUE INDEX "patient_public_id_key" ON "patient"("public_id");

-- CreateIndex
CREATE UNIQUE INDEX "patient_person_id_key" ON "patient"("person_id");

-- CreateIndex
CREATE UNIQUE INDEX "payment_treatment_id_key" ON "payment"("treatment_id");

-- AddForeignKey
ALTER TABLE "patient" ADD CONSTRAINT "patient_person_id_fkey" FOREIGN KEY ("person_id") REFERENCES "person"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "treatment" ADD CONSTRAINT "treatment_patient_id_fkey" FOREIGN KEY ("patient_id") REFERENCES "patient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "equipment" ADD CONSTRAINT "equipment_inventory_id_fkey" FOREIGN KEY ("inventory_id") REFERENCES "inventory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payment" ADD CONSTRAINT "payment_treatment_id_fkey" FOREIGN KEY ("treatment_id") REFERENCES "treatment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "team_member" ADD CONSTRAINT "team_member_person_id_fkey" FOREIGN KEY ("person_id") REFERENCES "person"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payroll_item" ADD CONSTRAINT "payroll_item_team_member_id_fkey" FOREIGN KEY ("team_member_id") REFERENCES "team_member"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
