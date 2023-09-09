/*
  Warnings:

  - You are about to drop the `casual_event` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_event_model" DROP CONSTRAINT "_event_model_A_fkey";

-- DropForeignKey
ALTER TABLE "_state_init_event" DROP CONSTRAINT "_state_init_event_A_fkey";

-- DropForeignKey
ALTER TABLE "_state_term_event" DROP CONSTRAINT "_state_term_event_A_fkey";

-- DropTable
DROP TABLE "casual_event";

-- CreateTable
CREATE TABLE "causal_event" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "causal_event_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "causal_event_name_key" ON "causal_event"("name");

-- AddForeignKey
ALTER TABLE "_event_model" ADD CONSTRAINT "_event_model_A_fkey" FOREIGN KEY ("A") REFERENCES "causal_event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_state_init_event" ADD CONSTRAINT "_state_init_event_A_fkey" FOREIGN KEY ("A") REFERENCES "causal_event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_state_term_event" ADD CONSTRAINT "_state_term_event_A_fkey" FOREIGN KEY ("A") REFERENCES "causal_event"("id") ON DELETE CASCADE ON UPDATE CASCADE;
