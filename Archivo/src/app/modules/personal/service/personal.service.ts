import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { APP_URL } from 'src/app/services/base-urls';
import { Personal } from '../types/personla';

@Injectable({
  providedIn: 'root'
})
export class PersonalService {
  private loading: boolean = false;
  private personal: Personal[] = [];

  get getPersonal() {
    return [...this.personal];
  }

  set addPersonal(person: Personal) {
    this.personal.push(person)
  }

  constructor(private http: HttpClient) { }

  get isLoading() {
    return this.loading;
  }

  getAllPersonal() {
    this.loading = true;
    this.http.
      get<any>(`${APP_URL}api/personal/`)
      .pipe(catchError((error) => {
        this.loading = false;
        return error;
      }))
      .subscribe((response: Personal[]) => {
        this.loading = false;
        this.personal = response;
      })
  }
}
