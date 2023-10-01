-- CreateTable
CREATE TABLE "Word" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "Word_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Syllable" (
    "id" UUID NOT NULL,
    "wordId" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "stress" TEXT,
    "phonemeMap" JSONB NOT NULL,
    "metric" TEXT,
    "compositionId" UUID,

    CONSTRAINT "Syllable_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Spelling" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "wordId" UUID NOT NULL,
    "tense" TEXT,
    "voiceMap" JSONB NOT NULL,
    "case" TEXT,
    "variantId" UUID,

    CONSTRAINT "Spelling_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Meaning" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "wordId" UUID NOT NULL,
    "etymology" TEXT,
    "domainMap" JSONB NOT NULL,
    "usual" TEXT,
    "contextId" UUID,

    CONSTRAINT "Meaning_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Usage" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "wordId" UUID NOT NULL,
    "literary" TEXT,
    "socialMap" JSONB NOT NULL,
    "journalistic" TEXT,
    "encodingId" UUID,

    CONSTRAINT "Usage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Phrase" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "Phrase_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sentence" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "Sentence_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Para" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "Para_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Character" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "Character_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "character_builder" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "character_builder_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Config" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "Config_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ConfigTemplate" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "ConfigTemplate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Conflict" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "Conflict_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "conflict_resolution_path" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "conflict_resolution_path_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TurningPoint" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "TurningPoint_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Objective" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "Objective_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Mission" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "Mission_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Level" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "Level_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LegendMap" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "LegendMap_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Power" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "Power_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tool" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "Tool_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Vehicle" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "Vehicle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CharacterArch" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "CharacterArch_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StoryLine" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "StoryLine_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Modeler" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "Modeler_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Action" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "Action_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "State" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "position" DECIMAL(65,30)[],
    "orientation" DECIMAL(65,30)[],
    "configuration" DECIMAL(65,30)[],

    CONSTRAINT "State_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CasualEvent" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "CasualEvent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "View" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "View_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_phrase_words" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateTable
CREATE TABLE "_sentence_words" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateTable
CREATE TABLE "_para_sentences" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateTable
CREATE TABLE "_character_conflicts" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateTable
CREATE TABLE "_character_turning_point" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateTable
CREATE TABLE "_character_objective" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateTable
CREATE TABLE "_character_arch" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateTable
CREATE TABLE "_character_storyline" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateTable
CREATE TABLE "_config_template" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateTable
CREATE TABLE "_mission_template" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateTable
CREATE TABLE "_legend_map_template" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateTable
CREATE TABLE "_level_template" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateTable
CREATE TABLE "_power_template" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateTable
CREATE TABLE "_tool_template" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateTable
CREATE TABLE "_vehicle_template" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateTable
CREATE TABLE "_conflict_res_path_conflict" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateTable
CREATE TABLE "_state_model" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateTable
CREATE TABLE "_view_model" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateTable
CREATE TABLE "_initial_states" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateTable
CREATE TABLE "_final_states" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateTable
CREATE TABLE "_event_model" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateTable
CREATE TABLE "_state_init_event" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateTable
CREATE TABLE "_state_term_event" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Word_name_key" ON "Word"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Syllable_name_key" ON "Syllable"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Spelling_name_key" ON "Spelling"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Meaning_name_key" ON "Meaning"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Usage_name_key" ON "Usage"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Phrase_name_key" ON "Phrase"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Sentence_name_key" ON "Sentence"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Para_name_key" ON "Para"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Character_name_key" ON "Character"("name");

-- CreateIndex
CREATE UNIQUE INDEX "character_builder_name_key" ON "character_builder"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Config_name_key" ON "Config"("name");

-- CreateIndex
CREATE UNIQUE INDEX "ConfigTemplate_name_key" ON "ConfigTemplate"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Conflict_name_key" ON "Conflict"("name");

-- CreateIndex
CREATE UNIQUE INDEX "conflict_resolution_path_name_key" ON "conflict_resolution_path"("name");

-- CreateIndex
CREATE UNIQUE INDEX "TurningPoint_name_key" ON "TurningPoint"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Objective_name_key" ON "Objective"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Mission_name_key" ON "Mission"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Level_name_key" ON "Level"("name");

-- CreateIndex
CREATE UNIQUE INDEX "LegendMap_name_key" ON "LegendMap"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Power_name_key" ON "Power"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Tool_name_key" ON "Tool"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Vehicle_name_key" ON "Vehicle"("name");

-- CreateIndex
CREATE UNIQUE INDEX "CharacterArch_name_key" ON "CharacterArch"("name");

-- CreateIndex
CREATE UNIQUE INDEX "StoryLine_name_key" ON "StoryLine"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Modeler_name_key" ON "Modeler"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Action_name_key" ON "Action"("name");

-- CreateIndex
CREATE UNIQUE INDEX "State_name_key" ON "State"("name");

-- CreateIndex
CREATE UNIQUE INDEX "CasualEvent_name_key" ON "CasualEvent"("name");

-- CreateIndex
CREATE UNIQUE INDEX "View_name_key" ON "View"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_phrase_words_AB_unique" ON "_phrase_words"("A", "B");

-- CreateIndex
CREATE INDEX "_phrase_words_B_index" ON "_phrase_words"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_sentence_words_AB_unique" ON "_sentence_words"("A", "B");

-- CreateIndex
CREATE INDEX "_sentence_words_B_index" ON "_sentence_words"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_para_sentences_AB_unique" ON "_para_sentences"("A", "B");

-- CreateIndex
CREATE INDEX "_para_sentences_B_index" ON "_para_sentences"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_character_conflicts_AB_unique" ON "_character_conflicts"("A", "B");

-- CreateIndex
CREATE INDEX "_character_conflicts_B_index" ON "_character_conflicts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_character_turning_point_AB_unique" ON "_character_turning_point"("A", "B");

-- CreateIndex
CREATE INDEX "_character_turning_point_B_index" ON "_character_turning_point"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_character_objective_AB_unique" ON "_character_objective"("A", "B");

-- CreateIndex
CREATE INDEX "_character_objective_B_index" ON "_character_objective"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_character_arch_AB_unique" ON "_character_arch"("A", "B");

-- CreateIndex
CREATE INDEX "_character_arch_B_index" ON "_character_arch"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_character_storyline_AB_unique" ON "_character_storyline"("A", "B");

-- CreateIndex
CREATE INDEX "_character_storyline_B_index" ON "_character_storyline"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_config_template_AB_unique" ON "_config_template"("A", "B");

-- CreateIndex
CREATE INDEX "_config_template_B_index" ON "_config_template"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_mission_template_AB_unique" ON "_mission_template"("A", "B");

-- CreateIndex
CREATE INDEX "_mission_template_B_index" ON "_mission_template"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_legend_map_template_AB_unique" ON "_legend_map_template"("A", "B");

-- CreateIndex
CREATE INDEX "_legend_map_template_B_index" ON "_legend_map_template"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_level_template_AB_unique" ON "_level_template"("A", "B");

-- CreateIndex
CREATE INDEX "_level_template_B_index" ON "_level_template"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_power_template_AB_unique" ON "_power_template"("A", "B");

-- CreateIndex
CREATE INDEX "_power_template_B_index" ON "_power_template"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_tool_template_AB_unique" ON "_tool_template"("A", "B");

-- CreateIndex
CREATE INDEX "_tool_template_B_index" ON "_tool_template"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_vehicle_template_AB_unique" ON "_vehicle_template"("A", "B");

-- CreateIndex
CREATE INDEX "_vehicle_template_B_index" ON "_vehicle_template"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_conflict_res_path_conflict_AB_unique" ON "_conflict_res_path_conflict"("A", "B");

-- CreateIndex
CREATE INDEX "_conflict_res_path_conflict_B_index" ON "_conflict_res_path_conflict"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_state_model_AB_unique" ON "_state_model"("A", "B");

-- CreateIndex
CREATE INDEX "_state_model_B_index" ON "_state_model"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_view_model_AB_unique" ON "_view_model"("A", "B");

-- CreateIndex
CREATE INDEX "_view_model_B_index" ON "_view_model"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_initial_states_AB_unique" ON "_initial_states"("A", "B");

-- CreateIndex
CREATE INDEX "_initial_states_B_index" ON "_initial_states"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_final_states_AB_unique" ON "_final_states"("A", "B");

-- CreateIndex
CREATE INDEX "_final_states_B_index" ON "_final_states"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_event_model_AB_unique" ON "_event_model"("A", "B");

-- CreateIndex
CREATE INDEX "_event_model_B_index" ON "_event_model"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_state_init_event_AB_unique" ON "_state_init_event"("A", "B");

-- CreateIndex
CREATE INDEX "_state_init_event_B_index" ON "_state_init_event"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_state_term_event_AB_unique" ON "_state_term_event"("A", "B");

-- CreateIndex
CREATE INDEX "_state_term_event_B_index" ON "_state_term_event"("B");

-- AddForeignKey
ALTER TABLE "Syllable" ADD CONSTRAINT "Syllable_wordId_fkey" FOREIGN KEY ("wordId") REFERENCES "Word"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Syllable" ADD CONSTRAINT "Syllable_compositionId_fkey" FOREIGN KEY ("compositionId") REFERENCES "Syllable"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Spelling" ADD CONSTRAINT "Spelling_wordId_fkey" FOREIGN KEY ("wordId") REFERENCES "Word"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Spelling" ADD CONSTRAINT "Spelling_variantId_fkey" FOREIGN KEY ("variantId") REFERENCES "Spelling"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Meaning" ADD CONSTRAINT "Meaning_wordId_fkey" FOREIGN KEY ("wordId") REFERENCES "Word"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Meaning" ADD CONSTRAINT "Meaning_contextId_fkey" FOREIGN KEY ("contextId") REFERENCES "Meaning"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Usage" ADD CONSTRAINT "Usage_wordId_fkey" FOREIGN KEY ("wordId") REFERENCES "Word"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Usage" ADD CONSTRAINT "Usage_encodingId_fkey" FOREIGN KEY ("encodingId") REFERENCES "Usage"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_phrase_words" ADD CONSTRAINT "_phrase_words_A_fkey" FOREIGN KEY ("A") REFERENCES "Phrase"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_phrase_words" ADD CONSTRAINT "_phrase_words_B_fkey" FOREIGN KEY ("B") REFERENCES "Word"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_sentence_words" ADD CONSTRAINT "_sentence_words_A_fkey" FOREIGN KEY ("A") REFERENCES "Sentence"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_sentence_words" ADD CONSTRAINT "_sentence_words_B_fkey" FOREIGN KEY ("B") REFERENCES "Word"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_para_sentences" ADD CONSTRAINT "_para_sentences_A_fkey" FOREIGN KEY ("A") REFERENCES "Para"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_para_sentences" ADD CONSTRAINT "_para_sentences_B_fkey" FOREIGN KEY ("B") REFERENCES "Sentence"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_character_conflicts" ADD CONSTRAINT "_character_conflicts_A_fkey" FOREIGN KEY ("A") REFERENCES "Character"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_character_conflicts" ADD CONSTRAINT "_character_conflicts_B_fkey" FOREIGN KEY ("B") REFERENCES "Conflict"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_character_turning_point" ADD CONSTRAINT "_character_turning_point_A_fkey" FOREIGN KEY ("A") REFERENCES "Character"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_character_turning_point" ADD CONSTRAINT "_character_turning_point_B_fkey" FOREIGN KEY ("B") REFERENCES "TurningPoint"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_character_objective" ADD CONSTRAINT "_character_objective_A_fkey" FOREIGN KEY ("A") REFERENCES "Character"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_character_objective" ADD CONSTRAINT "_character_objective_B_fkey" FOREIGN KEY ("B") REFERENCES "Objective"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_character_arch" ADD CONSTRAINT "_character_arch_A_fkey" FOREIGN KEY ("A") REFERENCES "Character"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_character_arch" ADD CONSTRAINT "_character_arch_B_fkey" FOREIGN KEY ("B") REFERENCES "CharacterArch"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_character_storyline" ADD CONSTRAINT "_character_storyline_A_fkey" FOREIGN KEY ("A") REFERENCES "Character"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_character_storyline" ADD CONSTRAINT "_character_storyline_B_fkey" FOREIGN KEY ("B") REFERENCES "StoryLine"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_config_template" ADD CONSTRAINT "_config_template_A_fkey" FOREIGN KEY ("A") REFERENCES "Config"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_config_template" ADD CONSTRAINT "_config_template_B_fkey" FOREIGN KEY ("B") REFERENCES "ConfigTemplate"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_mission_template" ADD CONSTRAINT "_mission_template_A_fkey" FOREIGN KEY ("A") REFERENCES "ConfigTemplate"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_mission_template" ADD CONSTRAINT "_mission_template_B_fkey" FOREIGN KEY ("B") REFERENCES "Mission"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_legend_map_template" ADD CONSTRAINT "_legend_map_template_A_fkey" FOREIGN KEY ("A") REFERENCES "ConfigTemplate"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_legend_map_template" ADD CONSTRAINT "_legend_map_template_B_fkey" FOREIGN KEY ("B") REFERENCES "LegendMap"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_level_template" ADD CONSTRAINT "_level_template_A_fkey" FOREIGN KEY ("A") REFERENCES "ConfigTemplate"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_level_template" ADD CONSTRAINT "_level_template_B_fkey" FOREIGN KEY ("B") REFERENCES "Level"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_power_template" ADD CONSTRAINT "_power_template_A_fkey" FOREIGN KEY ("A") REFERENCES "ConfigTemplate"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_power_template" ADD CONSTRAINT "_power_template_B_fkey" FOREIGN KEY ("B") REFERENCES "Power"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_tool_template" ADD CONSTRAINT "_tool_template_A_fkey" FOREIGN KEY ("A") REFERENCES "ConfigTemplate"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_tool_template" ADD CONSTRAINT "_tool_template_B_fkey" FOREIGN KEY ("B") REFERENCES "Tool"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_vehicle_template" ADD CONSTRAINT "_vehicle_template_A_fkey" FOREIGN KEY ("A") REFERENCES "ConfigTemplate"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_vehicle_template" ADD CONSTRAINT "_vehicle_template_B_fkey" FOREIGN KEY ("B") REFERENCES "Vehicle"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_conflict_res_path_conflict" ADD CONSTRAINT "_conflict_res_path_conflict_A_fkey" FOREIGN KEY ("A") REFERENCES "Conflict"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_conflict_res_path_conflict" ADD CONSTRAINT "_conflict_res_path_conflict_B_fkey" FOREIGN KEY ("B") REFERENCES "conflict_resolution_path"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_state_model" ADD CONSTRAINT "_state_model_A_fkey" FOREIGN KEY ("A") REFERENCES "Modeler"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_state_model" ADD CONSTRAINT "_state_model_B_fkey" FOREIGN KEY ("B") REFERENCES "State"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_view_model" ADD CONSTRAINT "_view_model_A_fkey" FOREIGN KEY ("A") REFERENCES "Modeler"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_view_model" ADD CONSTRAINT "_view_model_B_fkey" FOREIGN KEY ("B") REFERENCES "View"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_initial_states" ADD CONSTRAINT "_initial_states_A_fkey" FOREIGN KEY ("A") REFERENCES "Action"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_initial_states" ADD CONSTRAINT "_initial_states_B_fkey" FOREIGN KEY ("B") REFERENCES "State"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_final_states" ADD CONSTRAINT "_final_states_A_fkey" FOREIGN KEY ("A") REFERENCES "Action"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_final_states" ADD CONSTRAINT "_final_states_B_fkey" FOREIGN KEY ("B") REFERENCES "State"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_event_model" ADD CONSTRAINT "_event_model_A_fkey" FOREIGN KEY ("A") REFERENCES "CasualEvent"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_event_model" ADD CONSTRAINT "_event_model_B_fkey" FOREIGN KEY ("B") REFERENCES "Modeler"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_state_init_event" ADD CONSTRAINT "_state_init_event_A_fkey" FOREIGN KEY ("A") REFERENCES "CasualEvent"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_state_init_event" ADD CONSTRAINT "_state_init_event_B_fkey" FOREIGN KEY ("B") REFERENCES "State"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_state_term_event" ADD CONSTRAINT "_state_term_event_A_fkey" FOREIGN KEY ("A") REFERENCES "CasualEvent"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_state_term_event" ADD CONSTRAINT "_state_term_event_B_fkey" FOREIGN KEY ("B") REFERENCES "State"("id") ON DELETE CASCADE ON UPDATE CASCADE;
