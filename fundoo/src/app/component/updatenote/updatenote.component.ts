import { Component, OnInit, Input, Inject } from '@angular/core';
import { Note } from 'src/app/model/note.model';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NoteservicesService } from 'src/app/services/noteservices.service';

@Component({
  selector: 'app-updatenote',
  templateUrl: './updatenote.component.html',
  styleUrls: ['./updatenote.component.scss']
})
export class UpdatenoteComponent implements OnInit {

  @Input() notes : Note = new Note();
 
  constructor( @Inject(MAT_DIALOG_DATA) public data: any, private noteService:NoteservicesService)
  { }

  ngOnInit(): void {
  }
  updateNote(title, takenote, noteId) {
    console.log("datas : "+title);
    console.log("datas : "+takenote);
    console.log("datas : "+noteId);
    this.notes.title = title;
    this.notes.description = takenote;
    this.notes.id = noteId;
this.noteService.UpdateNotes(this.notes).subscribe( response => {
  window.location.reload();
  return this.snakbar.open("Successfully Updated Note..", "", {duration : 3000});
},
() => {
  return this.snakbar.open("Failed to Updated Note..", "", {duration : 3000});
});
  }

}