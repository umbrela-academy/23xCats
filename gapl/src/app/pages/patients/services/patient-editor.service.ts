import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PatientEditorService {

  private displayEditor = new BehaviorSubject<boolean>(false);
  displayEditor$ = this.displayEditor.asObservable();

  showEditor(show?: boolean) {
    this.displayEditor.next(show ?? true);
  }
}
