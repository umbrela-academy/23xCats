-- CreateTable
CREATE TABLE "_characters_build" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_characters_build_AB_unique" ON "_characters_build"("A", "B");

-- CreateIndex
CREATE INDEX "_characters_build_B_index" ON "_characters_build"("B");

-- AddForeignKey
ALTER TABLE "_characters_build" ADD CONSTRAINT "_characters_build_A_fkey" FOREIGN KEY ("A") REFERENCES "character"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_characters_build" ADD CONSTRAINT "_characters_build_B_fkey" FOREIGN KEY ("B") REFERENCES "character_builder"("id") ON DELETE CASCADE ON UPDATE CASCADE;
