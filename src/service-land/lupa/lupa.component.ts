import { Component, OnInit } from '@angular/core';
import { CountryService } from '../service/country.service';

export interface INav {
  link: string;
  label: string;
  icon?: string;
}

@Component({
  selector: 'app-lupa',
  templateUrl: './lupa.component.html',
  styleUrls: ['./lupa.component.scss']
})
export class LupaComponent implements OnInit {
  private _navs: INav[] = [
    { link: 'mom', label: 'My Mother' },
    { link: 'dad', label: 'My Father' },
    { link: 'roee', label: 'My Son' },
    { link: 'maayan', label: 'My Doughter' },
  ];
  _countries: any;
  public get navs(): INav[] {
    return this._navs;
  }
  flag = '';
  constructor(private countriesService: CountryService) {
    const httpReq = this.countriesService.getAll();
    console.log('before req');
    httpReq.subscribe(res => {
      console.log('response is ', res);

    });
    const httpReq2 = this.countriesService.getByName('israel');
    console.log('before req');
    httpReq2.subscribe(res => {
      console.log('response is ', res);
      this.flag = res[0].flag;

    });

  }

  ngOnInit() {

    setTimeout(() => {

      console.log('after req');
    }, 1000);



  }

}
