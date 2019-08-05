import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  title: String = "Events"
  events = [];
  eventList: any;
  today: number = Date.now();
  date: Date;
  constructor(private _eventService: EventService, private datePipe: DatePipe ) { }

  ngOnInit() {
    this._eventService.getEvents()
      .subscribe(
        res => {
          this.eventList = res,
          console.log(this.eventList)
        },
        err => console.log(err)
      )

  }
  
  myFunction(){
    this.date=new Date();
    let latest_date = this.datePipe.transform(this.date, 'yyyy-MM-dd');
   }

}
