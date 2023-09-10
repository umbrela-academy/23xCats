import { TeethLibService } from './../services/teeth-lib.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { defaultToothConditions, ISO3950Notation } from './../../../../core/models/teeth.model';
import { IdValue, SafeCrudArray } from './../../../../core/utils/crud';

@Component({
  selector: 'gapl-tooth-form',
  templateUrl: './tooth-form.component.html',
  styleUrls: ['./tooth-form.component.scss'],
})
export class ToothFormComponent implements OnInit {

  @Input() mode!: "permanent" | "deciduous";

  toothConditions = defaultToothConditions.map(c => c.charAt(0).toUpperCase() + c.substring(1));

  currentHistoryItem = -1;
  historyItems = new SafeCrudArray<string>([]);

  toothForm!: FormGroup;
  toothIndex = -1;

  constructor(private fb: FormBuilder, private tl: TeethLibService) { }

  currentToothIndex(): number {
    this.toothIndex = this.mode === 'permanent' ? this.tl.currentPermanentTooth : this.tl.currentDeciduousTooth;
    return this.toothIndex;
  }

  currentTooth(): string {
    if (this.toothIndex === -1) return "";
    return new ISO3950Notation(this.toothIndex).describe();
  }

  ngOnInit(): void {
    this.toothForm = this.fb.group({
      condition: [],
      diagnosedDate: [],
      historyItem: [],
      historyItems: [[]]
    });
  }

  addNote(note: string) {
    if (note.trim() === "") return;
    const key = this.currentHistoryItem !== -1 ? this.currentHistoryItem : this.historyItems.length;
    this.historyItems.add(note, key);
    this.currentHistoryItem = -1;
  }

  onNoteSelect(event: { value: IdValue }) {
    this.currentHistoryItem = event.value.key;
    this.toothForm.controls['historyItem'].setValue(this.historyItems.valueAt(event.value.key) ?? "");
  }

  deleteNote(key: number) {
    this.historyItems.remove(key);
    this.currentHistoryItem = -1;
    this.toothForm.controls['historyItem'].setValue("");
  }
}
