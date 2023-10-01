import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { ApiService } from '../../../core/api/api.service';
import { TreatmentEntity, TreatmentPayload } from './../model/treatment.model';

@Injectable({
  providedIn: 'root'
})
export class TreatmentApiService {

  readonly API_URL = `/treatments`;

  getStream$ = this.getStream().pipe(shareReplay(1, 10 * 60 * 1000));

  constructor(private apiService: ApiService) { }

  create(payload: TreatmentPayload): Observable<number> {
    return this.apiService.post<TreatmentPayload>(this.API_URL, payload);
  }

  getPaged(index = 0, size = 50): Observable<TreatmentEntity[]> {
    return this.apiService.get<TreatmentEntity[]>(this.API_URL + `/list/${index}/${size}`);
  }

  updateFull(treatment: TreatmentEntity): Observable<boolean> {
    return this.apiService.put<TreatmentEntity>(this.API_URL, treatment)
  }

  updatePartial(id: number, changed: Partial<TreatmentEntity>): Observable<boolean> {
    return this.apiService.patch<TreatmentEntity>(`${this.API_URL}/${id}`, changed);
  }

  delete(id: number): Observable<boolean> {
    return this.apiService.delete(`${this.API_URL}/${id}`);
  }

  private getStream() {
    return this.apiService.getStream<TreatmentEntity[]>(`${this.API_URL}/stream`);
  }

}
