import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FilterService } from 'primeng/api';
import { medicalConditions } from '../../../core/models/medical-conditions.data';
import { IdValue, SafeCrudArray } from '../../../core/utils/crud';
import { MedicalCondition } from './../../../core/models/medical-conditions.data';

@Component({
  selector: 'gapl-patient-medical-history',
  templateUrl: './patient-medical-history.component.html',
  styleUrls: ['./patient-medical-history.component.scss'],
})
export class PatientMedicalHistoryComponent implements OnInit {

  medicalForm!: FormGroup;

  medicalConditions = medicalConditions;
  filteredMedicalConditions: MedicalCondition[] = [];

  currentHistoryItem = -1;
  historyItems = new SafeCrudArray<string>([]);

  constructor(private fb: FormBuilder, private filterService: FilterService) { }

  ngOnInit(): void {
    this.medicalForm = this.fb.group({
      conditions: this.fb.array([]),
      medications: this.fb.array([]),
      allergies: [[]],
      historyItem: [],
      historyItems: [[]],
    });
    this.addCondition();
    this.addMedication();
  }

  get conditions() {
    return this.medicalForm.controls["conditions"] as FormArray;
  }

  get medications() {
    return this.medicalForm.controls["medications"] as FormArray;
  }

  addCondition() {
    const medicalCondtionForm = this.fb.group({
      condition: ['', Validators.required],
      diagnosedOn: [null]
    });
    this.conditions.push(medicalCondtionForm);
  }

  removeCondition(index: number) {
    this.conditions.removeAt(index);
  }

  addMedication() {
    const medicationForm = this.fb.group({
      medicine: ['', Validators.required],
      dosage: [''],
      since: [null]
    });
    this.medications.push(medicationForm);
  }

  removeMedication(index: number) {
    this.medications.removeAt(index);
  }

  addNote(note: string) {
    if (note.trim() === "") return;
    const key = this.currentHistoryItem !== -1 ? this.currentHistoryItem : this.historyItems.length;
    this.historyItems.add(note, key);
    this.currentHistoryItem = -1;
  }

  onNoteSelect(event: { value: IdValue }) {
    this.currentHistoryItem = event.value.key;
    this.medicalForm.controls['historyItem'].setValue(this.historyItems.valueAt(event.value.key) ?? "");
  }

  deleteNote(key: number) {
    this.historyItems.remove(key);
    this.currentHistoryItem = -1;
    this.medicalForm.controls['historyItem'].setValue("");
  }

  filterMedicalConditions(event: { query: string }) {
    const filteredConditions: MedicalCondition[] = [];
    this.medicalConditions.forEach(group => {
      const filteredSubItems = this.filterService.filter(
        group.items ?? [],
        ["label"],
        event.query,
        "contains"
      );
      if (filteredSubItems && filteredSubItems.length) {
        filteredConditions.push({
          label: group.label,
          value: group.value,
          items: filteredSubItems
        });
      }
    });
    this.filteredMedicalConditions = filteredConditions;
  }
}
