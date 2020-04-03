import { Component, OnInit } from '@angular/core';
import { NoteservicesService } from 'src/app/services/noteservices.service';
import { Note } from 'src/app/model/note.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {

  archiveNotes: any;
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
      this.archiveNotes = response.data;
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

  //working
  setcolor(noteId, colorname) {
    this.color.id = noteId;
    this.color.color = colorname;
    this.noteservice.setColor(this.color).subscribe(response => {
      console.log(response.message);
    })
    window.location.reload();
  }

  arrayofColors = [
    [
      { color: "rgb(255,255,255)", name: "white" },
      { color: "rgb(255,0,0)", name: "red" },
      { color: "rgb(255,165,0)", name: "orange" },
      { color: "rgb(255,255,0)", name: "yellow" }
    ],
    [
      { color: "rgb(0,128,0)", name: "green" },
      { color: "rgb(0,128,128)", name: "teal" },
      { color: "rgb(0,0,255)", name: "blue" },
      { color: "rgb(0,0,139)", name: "dark blue" }
    ],
    [
      { color: "rgb(128,0,128)", name: "purple" },
      { color: "rgb(255,192,203)", name: "pink" },
      { color: "rgb(165,42,42)", name: "brown" },
      { color: "rgb(128,128,128)", name: "gray" }
    ]
  ]
}
