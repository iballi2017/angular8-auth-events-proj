import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginUserData = {};
  _loginUrl = "http://localhost:3000/api/login";

  constructor(private http: HttpClient, private _router: Router) { }

  ngOnInit() {
  }

  loginUser() {
    this.http.post<any>(this._loginUrl, this.loginUserData)
      .subscribe(
        res => {
          console.log(res),
            localStorage.setItem('token', res.token)
            this._router.navigate(['/special'])
        },
        err => console.log(err))
    // console.log(this.loginUserData);
  }

}
