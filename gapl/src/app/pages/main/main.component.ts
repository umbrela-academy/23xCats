import { MenuItem } from 'primeng/api';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gapl-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {

  floatItems!: MenuItem[];

  ngOnInit() {
    this.floatItems = [
      {
        icon: 'pi pi-pencil',
        command: () => {
          console.log({ severity: 'info', summary: 'Add', detail: 'Data Added' });
        }
      },
      {
        icon: 'pi pi-refresh',
        command: () => {
          console.log({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
        }
      },
      {
        icon: 'pi pi-trash',
        command: () => {
          console.log({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
        }
      }
    ];
  }
}
