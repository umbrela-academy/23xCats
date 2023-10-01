import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'gapl-grid-card',
  templateUrl: './grid-card.component.html',
  styleUrls: ['./grid-card.component.scss'],
})
export class GridCardComponent {
  @Input() patient!: number;

  @ViewChild('container', { static: true }) contentRef!: ElementRef<HTMLElement>;

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
}
