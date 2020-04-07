import { Component, OnInit, Input, Inject } from '@angular/core';
import { Note } from 'src/app/model/note.model';

import { NoteservicesService } from 'src/app/services/noteservices.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-updatenote',
  templateUrl: './updatenote.component.html',
  styleUrls: ['./updatenote.component.scss']
})
export class UpdatenoteComponent implements OnInit {

  @Input() notes: Note = new Note();

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private noteService: NoteservicesService, private snakbar: MatSnackBar) { }

  ngOnInit(): void {
  }
  updateNote(title, description, noteId) {

    this.notes.title = title;
    this.notes.description = description;
    this.notes.id = noteId;
    console.log(this.notes)
    // this.noteService.UpdateNotes(this.notes).subscribe(response => {
      // window.location.reload();
      return this.snakbar.open("Successfully Updated Note..", "", { duration: 3000 });
    // },
      // () => {
        // return this.snakbar.open("Failed to Updated Note..", "", { duration: 3000 });
      // });
  }

}