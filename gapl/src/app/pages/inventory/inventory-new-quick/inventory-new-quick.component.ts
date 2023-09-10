import { InventoryApiService } from './../services/inventory-api.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { InventoryEditorService } from './../services/inventory-editor.service';

import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'gapl-inventory-new-quick',
  templateUrl: './inventory-new-quick.component.html',
  styleUrls: ['./inventory-new-quick.component.scss'],
})
export class InventoryNewQuickComponent {

  @Input() displayEditor$!: Observable<boolean>;


  inventoryForm = this.fb.group({
    name: this.fb.nonNullable.control("", Validators.required),
    code: [""],
    currentAmount: this.fb.nonNullable.control(0, Validators.required),
    neededAmount: [1],
    cost: new FormControl<number | null>(null),
    lastPurchase: new FormControl<Date | null>(null)
  });

  constructor(
    private editorService: InventoryEditorService,
    private fb: FormBuilder,
    private apiService: InventoryApiService
  ) { }


  setDialogVisibility(show: boolean) {
    this.editorService.showEditor(show);
  }

  submitForm() {
    this.inventoryForm.markAllAsTouched();
    if (!this.inventoryForm.valid) return;
    this.apiService.create(this.inventoryForm.getRawValue()).subscribe();
  }
}
