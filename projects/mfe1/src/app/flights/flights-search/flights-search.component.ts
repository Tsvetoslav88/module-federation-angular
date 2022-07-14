import {Component} from '@angular/core';
import { AuthLibService } from 'auth-lib';
// import { AuthLibService } from 'projects/auth-lib/src/public-api';

@Component({
  selector: 'app-flights-search',
  templateUrl: './flights-search.component.html',
  styleUrls: ['./flights-search.component.css']
})
export class FlightsSearchComponent {

  // user = 'Default';

  // constructor(private service: AuthLibService) { }

  // ngOnInit(): void {
  //   this.user = this.service.user;
  // }

 // Add this:
 user = this.service.user;

 // And add that:
 constructor(private service: AuthLibService) { }

  search(): void {
    alert('Not implemented for this demo!');
  }

  terms(): void {
    alert('Not implemented for this demo!');
  }

}
