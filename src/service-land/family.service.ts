import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FamilyService {
  private _bankNames = ['altman', 'rabinovich', 'mauda'];
  /**
   * Evrybody over the app can change it as they like
   */
  public wronglastname;
  public get lastname(): string {
    const name = this._bankNames[0];
    return name;
  }

  constructor(private router: Router) {

  }
  getSpecificName() {
    const { url, routerState } = this.router;
    console.log(url);
    return url.replace('/lupa/', '');
  }
}
