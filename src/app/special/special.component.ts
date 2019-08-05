import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-special',
  templateUrl: './special.component.html',
  styleUrls: ['./special.component.scss']
})
export class SpecialComponent implements OnInit {
  title: String = "Special Events"
  specialEvents = [];
  constructor(private _specialEventService: EventService, private _router: Router) { }

  ngOnInit() {
    this._specialEventService.getspecialEvents()
      .subscribe(res => {
        console.log(res),
          this.specialEvents = res
      },
        err => {
          // console.log(err),
          if(err instanceof HttpErrorResponse){
            if(err.status  === 401){
              this._router.navigate(['/login'])
            }
          }
        }
    )
}

}
