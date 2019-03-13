import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TickerDataService {

  constructor( private http: HttpClient) { 
  }

  getData(){
     this.http.get('http://localhost:4200/assets/data.json')  
  }
}
