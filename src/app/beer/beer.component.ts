import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.scss']
})
export class BeerComponent implements OnInit {
  city: any;
  beers: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {

    }

  getBeer(city){
      this.http.get('http://beermapping.com/webservice/locquery/2784b0cde06d9cff26924899ee980e60/'+city+'&s=json').subscribe(beers => {
      this.beers = beers;
      console.log(beers);
    })
  }


}
