import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  // confirm password disabled variable here
  enabled: boolean;

  putClass: boolean;

  // instance of user registration object
  registerdUserData = {};


  constructor(private _auth: AuthService, private _router: Router) { }

  ngOnInit() {
  }

  enable() {
    this.enabled = !this.enabled
  }



  registerUser() {
    this._auth.registerUser(this.registerdUserData)
      .subscribe(
        data =>  {
          console.log(data)
          localStorage.setItem('token', data.token)
          this._router.navigate(['/login'])
      },
        err => console.log(err)
      )
    // console.log(this.registerdUserData)
  }
}
