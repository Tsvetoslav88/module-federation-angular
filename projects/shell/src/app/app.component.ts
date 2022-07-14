import { Component } from '@angular/core';
import { AuthLibService } from 'auth-lib';
// import { AuthLibService } from 'projects/auth-lib/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'shell';
  
  constructor(private service: AuthLibService) {
    this.service.login('Max', null);
  }
}

