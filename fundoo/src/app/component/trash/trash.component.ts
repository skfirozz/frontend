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
    this.noteservice.getTrashNotes().subscribe(response => {
      this.trashNotes = response.data;
      console.log(response.data);
    })
  }


  //working
  unTrash(noteId: number, notes) {
    // debugger;
      this.color.id = noteId;
      this.color.istrash = false;
      this.noteservice.updateTrash(this.color).subscribe(response => {
        console.log(response.message);
      })
    // window.location.reload();
  }

  delete(noteId: number) {
    // debugger;
      this.color.id = noteId;
      this.noteservice.deleteNotes(this.color).subscribe(response => {
        console.log(response.message);
      })
    window.location.reload();
  }
}
