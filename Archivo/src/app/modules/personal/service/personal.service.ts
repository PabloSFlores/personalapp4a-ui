import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APP_URL } from 'src/app/services/base-urls';
import { Personal } from '../types/personal';

@Injectable({
  providedIn: 'root'
})
export class PersonalService {
  public loading: boolean = false;
  private people: Personal[] = [];

  get personal(){
    return [...this.people];
  }

  constructor(private http: HttpClient) { }

  findAll(){
    this.loading = true;
    return this.http
    .get<Personal[]>(`${APP_URL}api/personal/`)
  }

  save(personal: Personal){
    this.loading = true;
    return this.http
    .post<Personal>(`${APP_URL}api/personal/`,personal)
  }
}
