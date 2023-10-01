-- CreateTable
CREATE TABLE "Project" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "initiatorOrgId" UUID NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "IODevice" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "type" TEXT,
    "version" TEXT,
    "model" TEXT,

    CONSTRAINT "IODevice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Org" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "Org_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Person" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "Person_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "People" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "People_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_input_devices" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateTable
CREATE TABLE "_output_devices" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateTable
CREATE TABLE "_OrgToProject" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Project_name_key" ON "Project"("name");

-- CreateIndex
CREATE UNIQUE INDEX "IODevice_name_key" ON "IODevice"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Org_name_key" ON "Org"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Person_name_key" ON "Person"("name");

-- CreateIndex
CREATE UNIQUE INDEX "People_name_key" ON "People"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_input_devices_AB_unique" ON "_input_devices"("A", "B");

-- CreateIndex
CREATE INDEX "_input_devices_B_index" ON "_input_devices"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_output_devices_AB_unique" ON "_output_devices"("A", "B");

-- CreateIndex
CREATE INDEX "_output_devices_B_index" ON "_output_devices"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_OrgToProject_AB_unique" ON "_OrgToProject"("A", "B");

-- CreateIndex
CREATE INDEX "_OrgToProject_B_index" ON "_OrgToProject"("B");

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_initiatorOrgId_fkey" FOREIGN KEY ("initiatorOrgId") REFERENCES "Org"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_input_devices" ADD CONSTRAINT "_input_devices_A_fkey" FOREIGN KEY ("A") REFERENCES "IODevice"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_input_devices" ADD CONSTRAINT "_input_devices_B_fkey" FOREIGN KEY ("B") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_output_devices" ADD CONSTRAINT "_output_devices_A_fkey" FOREIGN KEY ("A") REFERENCES "IODevice"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_output_devices" ADD CONSTRAINT "_output_devices_B_fkey" FOREIGN KEY ("B") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgToProject" ADD CONSTRAINT "_OrgToProject_A_fkey" FOREIGN KEY ("A") REFERENCES "Org"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgToProject" ADD CONSTRAINT "_OrgToProject_B_fkey" FOREIGN KEY ("B") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;
