import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_API = 'https://restcountries.eu/rest/v2/';
@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http: HttpClient) { }

  getAll() {
    const url = BASE_API + 'all';
    return this.http.get(url);
  }
  getByID(id: any) {

  }
  getByName(name: any) {
    const url = BASE_API + 'name/' + name;
    return this.http.get(url);
  }
}
