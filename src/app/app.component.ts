import { Component } from '@angular/core';
import { DataService } from './services/data.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Result } from './interfaces/user';
import { pipe } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  users: any
  usersLists: any;
  results: Observable<any[]>;
  information: Observable<any[]>;
  searchTerm = '';
  searchText = '';


  constructor(private DataService: DataService, private http: HttpClient) { }




  ngOnInit() {
    this.users = this.DataService.getContcts();
    this.results = this.DataService.getContcts();
    this.information = this.results;

  }


  // getUserList() {
  //   return this.http.get('https://randomuser.me/api/?results=4').subscribe(data => {
  //     this.usersLists = data["results"];

  //     console.log(data);

  //   })
  // }


  filterMe() {
    console.log('searchterm', this.searchTerm);
    this.searchText = '';
    if (this.searchTerm != null) {
      this.searchText = this.searchTerm.toLowerCase();
    } else {
      this.searchText = '';
    }

    this.results = this.information.pipe(
      map((reports: Result[]) => reports.filter(p => {
        if (p.gender.toString().toLowerCase().indexOf(this.searchText) > -1) { return p; }
      }))
    );

    console.log('results - after', this.results);

  }

}

