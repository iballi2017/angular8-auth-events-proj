import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular8-Auth-proj';
  navButtonToggle: boolean = true;
  putClass: boolean;

  constructor(private _authService: AuthService){}
  
  toggleButton(){
    !this.navButtonToggle == this.navButtonToggle;
  }

  
  addClass() {
    this.putClass = !this.putClass
  }

}
