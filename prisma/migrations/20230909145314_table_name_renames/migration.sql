/*
  Warnings:

  - You are about to drop the `Action` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CasualEvent` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Character` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CharacterArch` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Config` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ConfigTemplate` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Conflict` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `LegendMap` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Level` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Meaning` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Mission` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Modeler` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Objective` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Org` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Para` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Person` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Phrase` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Power` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Sentence` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Spelling` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `State` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `StoryLine` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Syllable` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Tool` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TurningPoint` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Usage` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Vehicle` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `View` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Word` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Meaning" DROP CONSTRAINT "Meaning_contextId_fkey";

-- DropForeignKey
ALTER TABLE "Meaning" DROP CONSTRAINT "Meaning_wordId_fkey";

-- DropForeignKey
ALTER TABLE "Spelling" DROP CONSTRAINT "Spelling_variantId_fkey";

-- DropForeignKey
ALTER TABLE "Spelling" DROP CONSTRAINT "Spelling_wordId_fkey";

-- DropForeignKey
ALTER TABLE "Syllable" DROP CONSTRAINT "Syllable_compositionId_fkey";

-- DropForeignKey
ALTER TABLE "Syllable" DROP CONSTRAINT "Syllable_wordId_fkey";

-- DropForeignKey
ALTER TABLE "Usage" DROP CONSTRAINT "Usage_encodingId_fkey";

-- DropForeignKey
ALTER TABLE "Usage" DROP CONSTRAINT "Usage_wordId_fkey";

-- DropForeignKey
ALTER TABLE "_OrgToProject" DROP CONSTRAINT "_OrgToProject_A_fkey";

-- DropForeignKey
ALTER TABLE "_PeopleGroupToPerson" DROP CONSTRAINT "_PeopleGroupToPerson_B_fkey";

-- DropForeignKey
ALTER TABLE "_character_arch" DROP CONSTRAINT "_character_arch_A_fkey";

-- DropForeignKey
ALTER TABLE "_character_arch" DROP CONSTRAINT "_character_arch_B_fkey";

-- DropForeignKey
ALTER TABLE "_character_conflicts" DROP CONSTRAINT "_character_conflicts_A_fkey";

-- DropForeignKey
ALTER TABLE "_character_conflicts" DROP CONSTRAINT "_character_conflicts_B_fkey";

-- DropForeignKey
ALTER TABLE "_character_objective" DROP CONSTRAINT "_character_objective_A_fkey";

-- DropForeignKey
ALTER TABLE "_character_objective" DROP CONSTRAINT "_character_objective_B_fkey";

-- DropForeignKey
ALTER TABLE "_character_storyline" DROP CONSTRAINT "_character_storyline_A_fkey";

-- DropForeignKey
ALTER TABLE "_character_storyline" DROP CONSTRAINT "_character_storyline_B_fkey";

-- DropForeignKey
ALTER TABLE "_character_turning_point" DROP CONSTRAINT "_character_turning_point_A_fkey";

-- DropForeignKey
ALTER TABLE "_character_turning_point" DROP CONSTRAINT "_character_turning_point_B_fkey";

-- DropForeignKey
ALTER TABLE "_config_template" DROP CONSTRAINT "_config_template_A_fkey";

-- DropForeignKey
ALTER TABLE "_config_template" DROP CONSTRAINT "_config_template_B_fkey";

-- DropForeignKey
ALTER TABLE "_conflict_res_path_conflict" DROP CONSTRAINT "_conflict_res_path_conflict_A_fkey";

-- DropForeignKey
ALTER TABLE "_event_model" DROP CONSTRAINT "_event_model_A_fkey";

-- DropForeignKey
ALTER TABLE "_event_model" DROP CONSTRAINT "_event_model_B_fkey";

-- DropForeignKey
ALTER TABLE "_final_states" DROP CONSTRAINT "_final_states_A_fkey";

-- DropForeignKey
ALTER TABLE "_final_states" DROP CONSTRAINT "_final_states_B_fkey";

-- DropForeignKey
ALTER TABLE "_initial_states" DROP CONSTRAINT "_initial_states_A_fkey";

-- DropForeignKey
ALTER TABLE "_initial_states" DROP CONSTRAINT "_initial_states_B_fkey";

-- DropForeignKey
ALTER TABLE "_leading" DROP CONSTRAINT "_leading_A_fkey";

-- DropForeignKey
ALTER TABLE "_leading" DROP CONSTRAINT "_leading_B_fkey";

-- DropForeignKey
ALTER TABLE "_legend_map_template" DROP CONSTRAINT "_legend_map_template_A_fkey";

-- DropForeignKey
ALTER TABLE "_legend_map_template" DROP CONSTRAINT "_legend_map_template_B_fkey";

-- DropForeignKey
ALTER TABLE "_level_template" DROP CONSTRAINT "_level_template_A_fkey";

-- DropForeignKey
ALTER TABLE "_level_template" DROP CONSTRAINT "_level_template_B_fkey";

-- DropForeignKey
ALTER TABLE "_membering" DROP CONSTRAINT "_membering_A_fkey";

-- DropForeignKey
ALTER TABLE "_membering" DROP CONSTRAINT "_membering_B_fkey";

-- DropForeignKey
ALTER TABLE "_mission_template" DROP CONSTRAINT "_mission_template_A_fkey";

-- DropForeignKey
ALTER TABLE "_mission_template" DROP CONSTRAINT "_mission_template_B_fkey";

-- DropForeignKey
ALTER TABLE "_para_sentences" DROP CONSTRAINT "_para_sentences_A_fkey";

-- DropForeignKey
ALTER TABLE "_para_sentences" DROP CONSTRAINT "_para_sentences_B_fkey";

-- DropForeignKey
ALTER TABLE "_phrase_words" DROP CONSTRAINT "_phrase_words_A_fkey";

-- DropForeignKey
ALTER TABLE "_phrase_words" DROP CONSTRAINT "_phrase_words_B_fkey";

-- DropForeignKey
ALTER TABLE "_power_template" DROP CONSTRAINT "_power_template_A_fkey";

-- DropForeignKey
ALTER TABLE "_power_template" DROP CONSTRAINT "_power_template_B_fkey";

-- DropForeignKey
ALTER TABLE "_sentence_words" DROP CONSTRAINT "_sentence_words_A_fkey";

-- DropForeignKey
ALTER TABLE "_sentence_words" DROP CONSTRAINT "_sentence_words_B_fkey";

-- DropForeignKey
ALTER TABLE "_state_init_event" DROP CONSTRAINT "_state_init_event_A_fkey";

-- DropForeignKey
ALTER TABLE "_state_init_event" DROP CONSTRAINT "_state_init_event_B_fkey";

-- DropForeignKey
ALTER TABLE "_state_model" DROP CONSTRAINT "_state_model_A_fkey";

-- DropForeignKey
ALTER TABLE "_state_model" DROP CONSTRAINT "_state_model_B_fkey";

-- DropForeignKey
ALTER TABLE "_state_term_event" DROP CONSTRAINT "_state_term_event_A_fkey";

-- DropForeignKey
ALTER TABLE "_state_term_event" DROP CONSTRAINT "_state_term_event_B_fkey";

-- DropForeignKey
ALTER TABLE "_tool_template" DROP CONSTRAINT "_tool_template_A_fkey";

-- DropForeignKey
ALTER TABLE "_tool_template" DROP CONSTRAINT "_tool_template_B_fkey";

-- DropForeignKey
ALTER TABLE "_vehicle_template" DROP CONSTRAINT "_vehicle_template_A_fkey";

-- DropForeignKey
ALTER TABLE "_vehicle_template" DROP CONSTRAINT "_vehicle_template_B_fkey";

-- DropForeignKey
ALTER TABLE "_view_model" DROP CONSTRAINT "_view_model_A_fkey";

-- DropForeignKey
ALTER TABLE "_view_model" DROP CONSTRAINT "_view_model_B_fkey";

-- DropForeignKey
ALTER TABLE "project" DROP CONSTRAINT "project_initiator_org_id_fkey";

-- DropTable
DROP TABLE "Action";

-- DropTable
DROP TABLE "CasualEvent";

-- DropTable
DROP TABLE "Character";

-- DropTable
DROP TABLE "CharacterArch";

-- DropTable
DROP TABLE "Config";

-- DropTable
DROP TABLE "ConfigTemplate";

-- DropTable
DROP TABLE "Conflict";

-- DropTable
DROP TABLE "LegendMap";

-- DropTable
DROP TABLE "Level";

-- DropTable
DROP TABLE "Meaning";

-- DropTable
DROP TABLE "Mission";

-- DropTable
DROP TABLE "Modeler";

-- DropTable
DROP TABLE "Objective";

-- DropTable
DROP TABLE "Org";

-- DropTable
DROP TABLE "Para";

-- DropTable
DROP TABLE "Person";

-- DropTable
DROP TABLE "Phrase";

-- DropTable
DROP TABLE "Power";

-- DropTable
DROP TABLE "Sentence";

-- DropTable
DROP TABLE "Spelling";

-- DropTable
DROP TABLE "State";

-- DropTable
DROP TABLE "StoryLine";

-- DropTable
DROP TABLE "Syllable";

-- DropTable
DROP TABLE "Tool";

-- DropTable
DROP TABLE "TurningPoint";

-- DropTable
DROP TABLE "Usage";

-- DropTable
DROP TABLE "Vehicle";

-- DropTable
DROP TABLE "View";

-- DropTable
DROP TABLE "Word";

-- CreateTable
CREATE TABLE "org" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "org_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "person" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "person_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "word" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "word_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "syllable" (
    "id" UUID NOT NULL,
    "wordId" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "stress" TEXT,
    "phonemeMap" JSONB NOT NULL,
    "metric" TEXT,
    "compositionId" UUID,

    CONSTRAINT "syllable_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "spelling" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "wordId" UUID NOT NULL,
    "tense" TEXT,
    "voiceMap" JSONB NOT NULL,
    "case" TEXT,
    "variantId" UUID,

    CONSTRAINT "spelling_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "meaning" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "wordId" UUID NOT NULL,
    "etymology" TEXT,
    "domainMap" JSONB NOT NULL,
    "usual" TEXT,
    "contextId" UUID,

    CONSTRAINT "meaning_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "usage" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "wordId" UUID NOT NULL,
    "literary" TEXT,
    "socialMap" JSONB NOT NULL,
    "journalistic" TEXT,
    "encodingId" UUID,

    CONSTRAINT "usage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "phrase" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "phrase_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sentence" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "sentence_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "para" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "para_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "character" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "character_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "config" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "config_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "config_template" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "config_template_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "conflict" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "conflict_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "turning_point" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "turning_point_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "objective" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "objective_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "mission" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "mission_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "level" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "level_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "legend_map" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "legend_map_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "power" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "power_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tool" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "tool_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "vehicle" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "vehicle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "character_arch" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "character_arch_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "story_line" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "story_line_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "modeler" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "modeler_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "action" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "action_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "state" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "position" DECIMAL(65,30)[],
    "orientation" DECIMAL(65,30)[],
    "configuration" DECIMAL(65,30)[],

    CONSTRAINT "state_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "casual_event" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "casual_event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "view" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "view_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "org_name_key" ON "org"("name");

-- CreateIndex
CREATE UNIQUE INDEX "person_name_key" ON "person"("name");

-- CreateIndex
CREATE UNIQUE INDEX "word_name_key" ON "word"("name");

-- CreateIndex
CREATE UNIQUE INDEX "syllable_name_key" ON "syllable"("name");

-- CreateIndex
CREATE UNIQUE INDEX "spelling_name_key" ON "spelling"("name");

-- CreateIndex
CREATE UNIQUE INDEX "meaning_name_key" ON "meaning"("name");

-- CreateIndex
CREATE UNIQUE INDEX "usage_name_key" ON "usage"("name");

-- CreateIndex
CREATE UNIQUE INDEX "phrase_name_key" ON "phrase"("name");

-- CreateIndex
CREATE UNIQUE INDEX "sentence_name_key" ON "sentence"("name");

-- CreateIndex
CREATE UNIQUE INDEX "para_name_key" ON "para"("name");

-- CreateIndex
CREATE UNIQUE INDEX "character_name_key" ON "character"("name");

-- CreateIndex
CREATE UNIQUE INDEX "config_name_key" ON "config"("name");

-- CreateIndex
CREATE UNIQUE INDEX "config_template_name_key" ON "config_template"("name");

-- CreateIndex
CREATE UNIQUE INDEX "conflict_name_key" ON "conflict"("name");

-- CreateIndex
CREATE UNIQUE INDEX "turning_point_name_key" ON "turning_point"("name");

-- CreateIndex
CREATE UNIQUE INDEX "objective_name_key" ON "objective"("name");

-- CreateIndex
CREATE UNIQUE INDEX "mission_name_key" ON "mission"("name");

-- CreateIndex
CREATE UNIQUE INDEX "level_name_key" ON "level"("name");

-- CreateIndex
CREATE UNIQUE INDEX "legend_map_name_key" ON "legend_map"("name");

-- CreateIndex
CREATE UNIQUE INDEX "power_name_key" ON "power"("name");

-- CreateIndex
CREATE UNIQUE INDEX "tool_name_key" ON "tool"("name");

-- CreateIndex
CREATE UNIQUE INDEX "vehicle_name_key" ON "vehicle"("name");

-- CreateIndex
CREATE UNIQUE INDEX "character_arch_name_key" ON "character_arch"("name");

-- CreateIndex
CREATE UNIQUE INDEX "story_line_name_key" ON "story_line"("name");

-- CreateIndex
CREATE UNIQUE INDEX "modeler_name_key" ON "modeler"("name");

-- CreateIndex
CREATE UNIQUE INDEX "action_name_key" ON "action"("name");

-- CreateIndex
CREATE UNIQUE INDEX "state_name_key" ON "state"("name");

-- CreateIndex
CREATE UNIQUE INDEX "casual_event_name_key" ON "casual_event"("name");

-- CreateIndex
CREATE UNIQUE INDEX "view_name_key" ON "view"("name");

-- AddForeignKey
ALTER TABLE "project" ADD CONSTRAINT "project_initiator_org_id_fkey" FOREIGN KEY ("initiator_org_id") REFERENCES "org"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "syllable" ADD CONSTRAINT "syllable_wordId_fkey" FOREIGN KEY ("wordId") REFERENCES "word"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "syllable" ADD CONSTRAINT "syllable_compositionId_fkey" FOREIGN KEY ("compositionId") REFERENCES "syllable"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "spelling" ADD CONSTRAINT "spelling_wordId_fkey" FOREIGN KEY ("wordId") REFERENCES "word"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "spelling" ADD CONSTRAINT "spelling_variantId_fkey" FOREIGN KEY ("variantId") REFERENCES "spelling"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "meaning" ADD CONSTRAINT "meaning_wordId_fkey" FOREIGN KEY ("wordId") REFERENCES "word"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "meaning" ADD CONSTRAINT "meaning_contextId_fkey" FOREIGN KEY ("contextId") REFERENCES "meaning"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "usage" ADD CONSTRAINT "usage_wordId_fkey" FOREIGN KEY ("wordId") REFERENCES "word"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "usage" ADD CONSTRAINT "usage_encodingId_fkey" FOREIGN KEY ("encodingId") REFERENCES "usage"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgToProject" ADD CONSTRAINT "_OrgToProject_A_fkey" FOREIGN KEY ("A") REFERENCES "org"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_leading" ADD CONSTRAINT "_leading_A_fkey" FOREIGN KEY ("A") REFERENCES "org"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_leading" ADD CONSTRAINT "_leading_B_fkey" FOREIGN KEY ("B") REFERENCES "person"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_membering" ADD CONSTRAINT "_membering_A_fkey" FOREIGN KEY ("A") REFERENCES "org"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_membering" ADD CONSTRAINT "_membering_B_fkey" FOREIGN KEY ("B") REFERENCES "person"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PeopleGroupToPerson" ADD CONSTRAINT "_PeopleGroupToPerson_B_fkey" FOREIGN KEY ("B") REFERENCES "person"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_phrase_words" ADD CONSTRAINT "_phrase_words_A_fkey" FOREIGN KEY ("A") REFERENCES "phrase"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_phrase_words" ADD CONSTRAINT "_phrase_words_B_fkey" FOREIGN KEY ("B") REFERENCES "word"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_sentence_words" ADD CONSTRAINT "_sentence_words_A_fkey" FOREIGN KEY ("A") REFERENCES "sentence"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_sentence_words" ADD CONSTRAINT "_sentence_words_B_fkey" FOREIGN KEY ("B") REFERENCES "word"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_para_sentences" ADD CONSTRAINT "_para_sentences_A_fkey" FOREIGN KEY ("A") REFERENCES "para"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_para_sentences" ADD CONSTRAINT "_para_sentences_B_fkey" FOREIGN KEY ("B") REFERENCES "sentence"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_character_conflicts" ADD CONSTRAINT "_character_conflicts_A_fkey" FOREIGN KEY ("A") REFERENCES "character"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_character_conflicts" ADD CONSTRAINT "_character_conflicts_B_fkey" FOREIGN KEY ("B") REFERENCES "conflict"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_character_turning_point" ADD CONSTRAINT "_character_turning_point_A_fkey" FOREIGN KEY ("A") REFERENCES "character"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_character_turning_point" ADD CONSTRAINT "_character_turning_point_B_fkey" FOREIGN KEY ("B") REFERENCES "turning_point"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_character_objective" ADD CONSTRAINT "_character_objective_A_fkey" FOREIGN KEY ("A") REFERENCES "character"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_character_objective" ADD CONSTRAINT "_character_objective_B_fkey" FOREIGN KEY ("B") REFERENCES "objective"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_character_arch" ADD CONSTRAINT "_character_arch_A_fkey" FOREIGN KEY ("A") REFERENCES "character"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_character_arch" ADD CONSTRAINT "_character_arch_B_fkey" FOREIGN KEY ("B") REFERENCES "character_arch"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_character_storyline" ADD CONSTRAINT "_character_storyline_A_fkey" FOREIGN KEY ("A") REFERENCES "character"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_character_storyline" ADD CONSTRAINT "_character_storyline_B_fkey" FOREIGN KEY ("B") REFERENCES "story_line"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_config_template" ADD CONSTRAINT "_config_template_A_fkey" FOREIGN KEY ("A") REFERENCES "config"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_config_template" ADD CONSTRAINT "_config_template_B_fkey" FOREIGN KEY ("B") REFERENCES "config_template"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_mission_template" ADD CONSTRAINT "_mission_template_A_fkey" FOREIGN KEY ("A") REFERENCES "config_template"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_mission_template" ADD CONSTRAINT "_mission_template_B_fkey" FOREIGN KEY ("B") REFERENCES "mission"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_legend_map_template" ADD CONSTRAINT "_legend_map_template_A_fkey" FOREIGN KEY ("A") REFERENCES "config_template"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_legend_map_template" ADD CONSTRAINT "_legend_map_template_B_fkey" FOREIGN KEY ("B") REFERENCES "legend_map"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_level_template" ADD CONSTRAINT "_level_template_A_fkey" FOREIGN KEY ("A") REFERENCES "config_template"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_level_template" ADD CONSTRAINT "_level_template_B_fkey" FOREIGN KEY ("B") REFERENCES "level"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_power_template" ADD CONSTRAINT "_power_template_A_fkey" FOREIGN KEY ("A") REFERENCES "config_template"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_power_template" ADD CONSTRAINT "_power_template_B_fkey" FOREIGN KEY ("B") REFERENCES "power"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_tool_template" ADD CONSTRAINT "_tool_template_A_fkey" FOREIGN KEY ("A") REFERENCES "config_template"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_tool_template" ADD CONSTRAINT "_tool_template_B_fkey" FOREIGN KEY ("B") REFERENCES "tool"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_vehicle_template" ADD CONSTRAINT "_vehicle_template_A_fkey" FOREIGN KEY ("A") REFERENCES "config_template"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_vehicle_template" ADD CONSTRAINT "_vehicle_template_B_fkey" FOREIGN KEY ("B") REFERENCES "vehicle"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_conflict_res_path_conflict" ADD CONSTRAINT "_conflict_res_path_conflict_A_fkey" FOREIGN KEY ("A") REFERENCES "conflict"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_state_model" ADD CONSTRAINT "_state_model_A_fkey" FOREIGN KEY ("A") REFERENCES "modeler"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_state_model" ADD CONSTRAINT "_state_model_B_fkey" FOREIGN KEY ("B") REFERENCES "state"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_view_model" ADD CONSTRAINT "_view_model_A_fkey" FOREIGN KEY ("A") REFERENCES "modeler"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_view_model" ADD CONSTRAINT "_view_model_B_fkey" FOREIGN KEY ("B") REFERENCES "view"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_initial_states" ADD CONSTRAINT "_initial_states_A_fkey" FOREIGN KEY ("A") REFERENCES "action"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_initial_states" ADD CONSTRAINT "_initial_states_B_fkey" FOREIGN KEY ("B") REFERENCES "state"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_final_states" ADD CONSTRAINT "_final_states_A_fkey" FOREIGN KEY ("A") REFERENCES "action"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_final_states" ADD CONSTRAINT "_final_states_B_fkey" FOREIGN KEY ("B") REFERENCES "state"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_event_model" ADD CONSTRAINT "_event_model_A_fkey" FOREIGN KEY ("A") REFERENCES "casual_event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_event_model" ADD CONSTRAINT "_event_model_B_fkey" FOREIGN KEY ("B") REFERENCES "modeler"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_state_init_event" ADD CONSTRAINT "_state_init_event_A_fkey" FOREIGN KEY ("A") REFERENCES "casual_event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_state_init_event" ADD CONSTRAINT "_state_init_event_B_fkey" FOREIGN KEY ("B") REFERENCES "state"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_state_term_event" ADD CONSTRAINT "_state_term_event_A_fkey" FOREIGN KEY ("A") REFERENCES "casual_event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_state_term_event" ADD CONSTRAINT "_state_term_event_B_fkey" FOREIGN KEY ("B") REFERENCES "state"("id") ON DELETE CASCADE ON UPDATE CASCADE;
