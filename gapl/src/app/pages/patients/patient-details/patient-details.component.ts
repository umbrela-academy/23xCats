import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'gapl-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.scss'],
})
export class PatientDetailsComponent implements OnInit {

  activeIndexes: number[] = [];

  steps: MenuItem[] = [
    { icon: "🧘", label: "Patient ID", expanded: true },
    { icon: "📔", label: "Quick Notes", expanded: false },
    { icon: "🦷", label: "Dental History", expanded: false },
    { icon: "🫀", label: "Medical History", expanded: false },
    { icon: "📷", label: "ID Photo", expanded: false },
    { icon: "📸", label: "Clinical Photos", expanded: false }
  ];

  ngOnInit() {
    console.log("inited");
  }

  onTabOpen(event: { index: number }) {
    if (event.index > this.steps.length) return;
    this.steps[event.index].expanded = true;
  }

  onTabClose(event: { index: number }) {
    if (event.index > this.steps.length) return;
    this.steps[event.index].expanded = false;
  }

}
