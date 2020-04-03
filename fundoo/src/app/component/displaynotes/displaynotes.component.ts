import { Component, OnInit } from '@angular/core';
import { NoteservicesService } from 'src/app/services/noteservices.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Note } from 'src/app/model/note.model';

@Component({
  selector: 'app-displaynotes',
  templateUrl: './displaynotes.component.html',
  styleUrls: ['./displaynotes.component.scss']
})
export class DisplaynotesComponent implements OnInit {

  pinNotes: Note[];
  unPinNotes: Note[];
  allNotes: any;
  color: Note = new Note();

  constructor(private noteservice: NoteservicesService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.allnotes();
    console.log('disply');
  }
  ngOnChanges() {
    console.log('ji');
    window.location.reload();
  }


  allnotes() {
    this.noteservice.getnotes().subscribe(response => {
      this.allNotes = response.data;
      console.log(response.data);
    })
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

  //working
  archive(noteId: number, notes) {
    this.color.id = noteId;
    if (notes.isarchived) {
      console.log('archi');
      this.color.isarchived = false;
      this.noteservice.updateArchive(this.color).subscribe(response => {
        console.log(response.message);
      })
    }
    else {
      console.log('not');
      this.color.isarchived = true;
      this.noteservice.updateArchive(this.color).subscribe(response => {
        console.log(response.message);
      })
    }
    window.location.reload();
  }



trash(noteId: number, notes) {
  if (notes.istrash == '0') {
    notes.istrash = '1';
    this.noteservice.updateTrash(noteId, notes).subscribe(response => {
      console.log('trashed');
    })
  }
  else {
    notes.istrash = '0';
    this.noteservice.updateTrash(noteId, notes).subscribe(response => {
      console.log('untrashed');
    })
  }
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
