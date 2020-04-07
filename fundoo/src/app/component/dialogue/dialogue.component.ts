import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Note } from 'src/app/model/note.model';
import { NoteservicesService } from 'src/app/services/noteservices.service';

@Component({
  selector: 'app-dialogue',
  templateUrl: './dialogue.component.html',
  styleUrls: ['./dialogue.component.scss']
})
export class DialogueComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private service : NoteservicesService ) { }

  passData: Note=new Note();
  ngOnInit(): void {
  }

  updateNote(title, description, noteId) {
    debugger;
    this.passData.id=noteId;
    this.passData.description=description;
    this.passData.title=title;
    console.log(this.passData);
    this.service.UpdateNotes(this.passData).subscribe(response => {
      window.location.reload();
      console.log(response.message);
    });
  }
}
