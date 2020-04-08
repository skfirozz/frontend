import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.scss']
})
export class ReminderComponent implements OnInit {

  time:any;
  repeat:any;
  constructor() { }
  ngOnInit(): void {
  }

  setTime(time){
    this.time=time;
    console.log(time);
  }
  setRepitation(repeat) {
    this.repeat=repeat;
    console.log(this.repeat);
  }

  

}
