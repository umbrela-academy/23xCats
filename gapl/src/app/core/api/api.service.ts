import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, Injector } from "@angular/core";
import { Observable, map } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    apiUrl = '/api';
    http;
    constructor(private injector: Injector) {
        this.http = this.injector.get(HttpClient);
     }

    get<T>(url: string, params: HttpParams = new HttpParams()): Observable<T> {
        return this.http.get<T>(`${this.apiUrl}${url}`, { params });
    }

    post<P>(url: string, payload: P): Observable<number> {
        return this.http.post<number>(`${this.apiUrl}${url}`, payload);
    }

    put<P>(url: string, payload: P): Observable<boolean> {
        return this.http.put<boolean>(`${this.apiUrl}${url}`, payload, { observe: 'response' })
            .pipe(map(resp => resp.status === 200));
    }

    patch<P>(url: string, payload: Partial<P>): Observable<boolean> {
        return this.http.patch<boolean>(`${this.apiUrl}${url}`, payload, { observe: 'response' })
            .pipe(map(resp => resp.status === 200));
    }

    delete(url: string): Observable<boolean> {
        return this.http.delete<boolean>(`${this.apiUrl}${url}`, { observe: 'response' })
            .pipe(map(resp => resp.status === 200));
    }

    getStream<T>(url: string, params: HttpParams = new HttpParams()): Observable<T> {
        return this.http.get<T>(`${this.apiUrl}${url}`, { params }); //.pipe(mergeMap(data => of(data)))
    }
}