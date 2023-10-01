import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { PatientEditorService } from './../services/patient-editor.service';

@Component({
  selector: 'gapl-patient-new-quick',
  templateUrl: './patient-new-quick.component.html',
  styleUrls: ['./patient-new-quick.component.scss'],
})
export class PatientNewQuickComponent {

  @Input() displayEditor$!: Observable<boolean>;
  constructor(private patientEditorService: PatientEditorService) { }


  setDialogVisibility(show: boolean) {
    this.patientEditorService.showEditor(show);
  }
}
