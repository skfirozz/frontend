import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NoteservicesService } from 'src/app/services/noteservices.service';
import { Note } from 'src/app/model/note.model';

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.scss']
})
export class ReminderComponent implements OnInit {

  time = "8:00 AM";
  repeat = "daily";
  reminder:Note = new Note();
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private noteService: NoteservicesService) { }
  ngOnInit(): void {
  }

  setTime(time) {
    this.time = time;
  }

  setRepitation(repeat) {
    this.repeat = repeat;
  }

  save(date,noteId) {
    this.reminder.reminder= date + this.time;
    this.reminder.id=noteId;
    console.log(this.reminder);
  }


}
