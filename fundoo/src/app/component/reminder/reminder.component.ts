import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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
  reminder: Note = new Note();
  day = "Today";
  todayString: string = new Date().toDateString();
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private noteService: NoteservicesService,
    public dialogRef: MatDialogRef<ReminderComponent>) { }
  ngOnInit(): void {
  }

  setTime(time) {
    this.time = time;
  }

  setRepitation(repeat) {
    this.repeat = repeat;
  }

  save(date, noteId) {
    // debugger;
    let str: any;
    if (date != "") {
      let v = new Date(date);
      str = v.toDateString();
    }
    else  str = this.day;
    this.reminder.reminder = str + " " + this.time;
    if (noteId != null) {
      this.reminder.id = noteId;
      this.noteService.addReminder(this.reminder).subscribe(response => {
        console.log(response.message);
        location.reload();
      })
    }
    else if (noteId == null) {
      // debugger;
      this.dialogRef.close({ reminder: this.reminder.reminder });
    }
    else
      console.log("error");
  }

}
