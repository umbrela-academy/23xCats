import { Component, Input } from '@angular/core';

@Component({
  selector: 'gapl-wide-card',
  templateUrl: './wide-card.component.html',
  styleUrls: ['./wide-card.component.scss'],
})
export class WideCardComponent {
  @Input() patient!: number;

  selected = false;

  fullName = "Test Karna";
  gender = "Male";
  age = "32";
  phoneNumber = "9801238532";

  prevAppointment = "Composite 3";
  nextAppointment = "RCT 3 Canals";

  outstandingAppointments = this.prevAppointment;

  since = new Date().toString().replace(/GMT.*/, "");

  outstandingAmount = 3000;
  paidAmount = 21300;

  prevDate = new Date().toString().replace(/GMT.*/, "");
  nextDate = new Date().toString().replace(/GMT.*/, "");

  toggleSelection() {
    this.selected = !this.selected;
  }
}
