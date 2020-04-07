import { Component, OnInit, Input } from '@angular/core';
import { Note } from 'src/app/model/note.model';
import { NoteservicesService } from 'src/app/services/noteservices.service';

@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.scss']
})
export class DisplayDataComponent implements OnInit {
  
  @Input() notes: Note = new Note();

  color:Note=new Note();
  edit:boolean=false;
  constructor(private noteservice:NoteservicesService) { }

  ngOnInit(): void {
  }

  pin(noteId: number, notes) {
    this.color.id = noteId;
    if (notes.ispinned == true) {
      this.color.ispinned = false;
      this.noteservice.updatePin(this.color).subscribe(response => {
        console.log(response.message);
      })
    }
    else {
      this.color.ispinned = true;
      this.noteservice.updatePin(this.color).subscribe(response => {
        console.log(response.message);
      })
    }
    window.location.reload();
  }

  editnotes()
  {
    this.edit=true
  }
  updateNotes(notes){
    debugger;
    console.log(notes);
  }
}
