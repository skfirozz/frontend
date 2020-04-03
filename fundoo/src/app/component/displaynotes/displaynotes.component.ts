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
    })
  }

  pin(noteId: number, notes) {
    if (notes.pinned == true) {
      this.color.ispinned=false;
      this.color.id=noteId;
      this.noteservice.updatePin(this.color).subscribe(response => {
        console.log(response.message);
      })
    }
    else {
      this.color.ispinned=true;
      this.color.id=noteId;
      this.noteservice.updatePin(this.color).subscribe(response => {
        console.log(response.message);
      })
    }
  }

  archive(noteId: number, notes) {
    if (notes.isarchive == "0") {
      notes.isarchive = '1';
      this.noteservice.updateArchive(noteId, notes).subscribe(response => {
        console.log('archived');
      })
    }
    else {
      notes.isarchive = '0';
      this.noteservice.updateArchive(noteId, notes).subscribe(response => {
        console.log('unarchived');
      })
    }
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

  setcolor(noteId, colorname) {
    this.color.id = noteId;
    this.color.color = colorname;
    this.noteservice.setColor(this.color).subscribe(response => {
      console.log(response.message);
    })
    window.location.reload();
  }





  notes = [
    { color: "rgb(255, 179, 255)", name: "pink", title: "firoz", description: "from karlapalem", isarchived: true, istrash: "0", pinned: true },
    { color: "rgb(255, 255, 128)", name: "darkGolden", title: "ershad", description: "from karlapalem", isarchived: true, istrash: "0", pinned: true },
    { color: "rgb(200, 232, 104)", name: "yellow", title: "shamsheer", description: "from karlapalem", isarchived: false, istrash: "1", pinned: true },
    { color: " rgb(158, 136, 191)", name: "darkYellow", title: "mallika", description: "from karlapalem", isarchived: false, istrash: "1", pinned: true },
    { color: "slategray", name: "grey", title: "karim", description: "from karlapalem", isarchived: "1", istrash: false, pinned: false },
    { color: "rgb(153, 221, 255)", name: "Teal", title: "sharmila", description: "from karlapalem", isarchived: false, istrash: "1", pinned: false },
    { color: "rgb(203,240,248)", name: "blue", title: "budi", description: "from karlapalem", isarchived: true, istrash: "0", pinned: false },
    { color: "rgb(174,203,250)", name: "Dark blue", title: "shabbir", description: "from karlapalem", isarchived: true, istrash: "0", pinned: false }
  ]

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
