import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as Rx from "rxjs";
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators';
import { pipe } from 'rxjs';
// import { Camping } from 'app/interfaces/camping';

@Injectable({
  providedIn: 'root'
})


export class DataService {




  usersLists: any;




  constructor(private http: HttpClient) { }

  // ---------------- user ------------------- //

  getUserList() {
    this.http.get('https://randomuser.me/api/?results=4').subscribe(data => {
      this.usersLists = data["results"];
    })
    return this.usersLists
  }

  getUserLists() {
    return this.http.get('https://randomuser.me/api/?results=4');
  }


  getContcts():Observable<any[]> {
    return this.http.get<any[]>(`https://randomuser.me/api/?results=4`)
      .pipe(map(response => response['results']));
  }
}
