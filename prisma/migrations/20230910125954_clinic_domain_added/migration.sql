-- CreateTable
CREATE TABLE "patient" (
    "id" UUID NOT NULL,
    "publicId" TEXT,
    "personId" UUID NOT NULL,

    CONSTRAINT "patient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "treatment" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "totalCost" DECIMAL(65,30) NOT NULL,
    "patientId" UUID NOT NULL,

    CONSTRAINT "treatment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "payment" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "payment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "quote" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "quote_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "invoice" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "invoice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "receipt" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "receipt_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "therapy" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "therapy_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "surgery" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "surgery_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "medication" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "medication_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "remedy" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "remedy_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "equipment" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "inventoryId" UUID NOT NULL,

    CONSTRAINT "equipment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "inventory" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "inventory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_treatment_payments" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateTable
CREATE TABLE "_payment_quotes" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateTable
CREATE TABLE "_payment_receipts" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateTable
CREATE TABLE "_payment_invoices" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateTable
CREATE TABLE "_treatment_therapies" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateTable
CREATE TABLE "_treatment_surgeries" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateTable
CREATE TABLE "_treatment_medications" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateTable
CREATE TABLE "_treatment_remedies" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateTable
CREATE TABLE "_treatment_equipments" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "patient_publicId_key" ON "patient"("publicId");

-- CreateIndex
CREATE UNIQUE INDEX "patient_personId_key" ON "patient"("personId");

-- CreateIndex
CREATE UNIQUE INDEX "treatment_name_key" ON "treatment"("name");

-- CreateIndex
CREATE UNIQUE INDEX "payment_name_key" ON "payment"("name");

-- CreateIndex
CREATE UNIQUE INDEX "quote_name_key" ON "quote"("name");

-- CreateIndex
CREATE UNIQUE INDEX "invoice_name_key" ON "invoice"("name");

-- CreateIndex
CREATE UNIQUE INDEX "receipt_name_key" ON "receipt"("name");

-- CreateIndex
CREATE UNIQUE INDEX "therapy_name_key" ON "therapy"("name");

-- CreateIndex
CREATE UNIQUE INDEX "surgery_name_key" ON "surgery"("name");

-- CreateIndex
CREATE UNIQUE INDEX "medication_name_key" ON "medication"("name");

-- CreateIndex
CREATE UNIQUE INDEX "remedy_name_key" ON "remedy"("name");

-- CreateIndex
CREATE UNIQUE INDEX "equipment_name_key" ON "equipment"("name");

-- CreateIndex
CREATE UNIQUE INDEX "inventory_name_key" ON "inventory"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_treatment_payments_AB_unique" ON "_treatment_payments"("A", "B");

-- CreateIndex
CREATE INDEX "_treatment_payments_B_index" ON "_treatment_payments"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_payment_quotes_AB_unique" ON "_payment_quotes"("A", "B");

-- CreateIndex
CREATE INDEX "_payment_quotes_B_index" ON "_payment_quotes"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_payment_receipts_AB_unique" ON "_payment_receipts"("A", "B");

-- CreateIndex
CREATE INDEX "_payment_receipts_B_index" ON "_payment_receipts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_payment_invoices_AB_unique" ON "_payment_invoices"("A", "B");

-- CreateIndex
CREATE INDEX "_payment_invoices_B_index" ON "_payment_invoices"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_treatment_therapies_AB_unique" ON "_treatment_therapies"("A", "B");

-- CreateIndex
CREATE INDEX "_treatment_therapies_B_index" ON "_treatment_therapies"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_treatment_surgeries_AB_unique" ON "_treatment_surgeries"("A", "B");

-- CreateIndex
CREATE INDEX "_treatment_surgeries_B_index" ON "_treatment_surgeries"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_treatment_medications_AB_unique" ON "_treatment_medications"("A", "B");

-- CreateIndex
CREATE INDEX "_treatment_medications_B_index" ON "_treatment_medications"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_treatment_remedies_AB_unique" ON "_treatment_remedies"("A", "B");

-- CreateIndex
CREATE INDEX "_treatment_remedies_B_index" ON "_treatment_remedies"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_treatment_equipments_AB_unique" ON "_treatment_equipments"("A", "B");

-- CreateIndex
CREATE INDEX "_treatment_equipments_B_index" ON "_treatment_equipments"("B");

-- AddForeignKey
ALTER TABLE "patient" ADD CONSTRAINT "patient_personId_fkey" FOREIGN KEY ("personId") REFERENCES "person"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "treatment" ADD CONSTRAINT "treatment_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "patient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "equipment" ADD CONSTRAINT "equipment_inventoryId_fkey" FOREIGN KEY ("inventoryId") REFERENCES "inventory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_treatment_payments" ADD CONSTRAINT "_treatment_payments_A_fkey" FOREIGN KEY ("A") REFERENCES "payment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_treatment_payments" ADD CONSTRAINT "_treatment_payments_B_fkey" FOREIGN KEY ("B") REFERENCES "treatment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_payment_quotes" ADD CONSTRAINT "_payment_quotes_A_fkey" FOREIGN KEY ("A") REFERENCES "payment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_payment_quotes" ADD CONSTRAINT "_payment_quotes_B_fkey" FOREIGN KEY ("B") REFERENCES "quote"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_payment_receipts" ADD CONSTRAINT "_payment_receipts_A_fkey" FOREIGN KEY ("A") REFERENCES "payment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_payment_receipts" ADD CONSTRAINT "_payment_receipts_B_fkey" FOREIGN KEY ("B") REFERENCES "receipt"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_payment_invoices" ADD CONSTRAINT "_payment_invoices_A_fkey" FOREIGN KEY ("A") REFERENCES "invoice"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_payment_invoices" ADD CONSTRAINT "_payment_invoices_B_fkey" FOREIGN KEY ("B") REFERENCES "payment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_treatment_therapies" ADD CONSTRAINT "_treatment_therapies_A_fkey" FOREIGN KEY ("A") REFERENCES "therapy"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_treatment_therapies" ADD CONSTRAINT "_treatment_therapies_B_fkey" FOREIGN KEY ("B") REFERENCES "treatment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_treatment_surgeries" ADD CONSTRAINT "_treatment_surgeries_A_fkey" FOREIGN KEY ("A") REFERENCES "surgery"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_treatment_surgeries" ADD CONSTRAINT "_treatment_surgeries_B_fkey" FOREIGN KEY ("B") REFERENCES "treatment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_treatment_medications" ADD CONSTRAINT "_treatment_medications_A_fkey" FOREIGN KEY ("A") REFERENCES "medication"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_treatment_medications" ADD CONSTRAINT "_treatment_medications_B_fkey" FOREIGN KEY ("B") REFERENCES "treatment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_treatment_remedies" ADD CONSTRAINT "_treatment_remedies_A_fkey" FOREIGN KEY ("A") REFERENCES "remedy"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_treatment_remedies" ADD CONSTRAINT "_treatment_remedies_B_fkey" FOREIGN KEY ("B") REFERENCES "treatment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_treatment_equipments" ADD CONSTRAINT "_treatment_equipments_A_fkey" FOREIGN KEY ("A") REFERENCES "equipment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_treatment_equipments" ADD CONSTRAINT "_treatment_equipments_B_fkey" FOREIGN KEY ("B") REFERENCES "treatment"("id") ON DELETE CASCADE ON UPDATE CASCADE;
