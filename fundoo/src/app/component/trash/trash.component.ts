import { Component, OnInit } from '@angular/core';
import { NoteservicesService } from 'src/app/services/noteservices.service';
import { Note } from 'src/app/model/note.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {

  trashNotes: any;
  color: Note = new Note();

  constructor(private noteservice: NoteservicesService, private route: ActivatedRoute, private router: Router) 
  {
  }

  ngOnInit() {
    this.allNotes();
  }
  ngOnChanges() {
    console.log('ji');
    window.location.reload();
  }


  allNotes() {
    this.noteservice.getArchiveNotes().subscribe(response => {
      this.trashNotes = response.data;
      console.log(response.data);
    })
  }

  //working
  pin(noteId: number, notes) {
      this.color.id = noteId;
      this.color.ispinned = true;
      this.noteservice.updatePin(this.color).subscribe(response => {
        console.log(response.message);
      })
    window.location.reload();
  }

  //working
  archive(noteId: number, notes) {
    this.color.id = noteId;
    debugger;
      this.color.isarchived = false;
      this.noteservice.updateArchive(this.color).subscribe(response => {
        console.log(response.message);
      })
    window.location.reload();
  }

  //working
  trash(noteId: number, notes) {
    this.color.id = noteId;
    if (notes.istrash) {
      this.color.istrash = false;
      this.noteservice.updateTrash(this.color).subscribe(response => {
        console.log(response.message);
      })
    }
    else {
      this.color.istrash = true;
      this.noteservice.updateTrash(this.color).subscribe(response => {
        console.log(response.message);
      })
    }
    window.location.reload();
  }
}
