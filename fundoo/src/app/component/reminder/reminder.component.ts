import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NoteservicesService } from 'src/app/services/noteservices.service';

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.scss']
})
export class ReminderComponent implements OnInit {

  time = "8:00 AM";
  repeat = "daily";
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private noteService: NoteservicesService) { }
  ngOnInit(): void {
  }

  setTime(time) {
    console.log(this.time);
    this.time = time;
    console.log(time);
  }

  setRepitation(repeat) {
    this.repeat = repeat;
    console.log(this.repeat);
  }

  save(date) {
    
    console.log(date);

  }


}
