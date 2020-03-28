import { Component, OnInit } from '@angular/core';
import { NoteservicesService } from 'src/app/services/noteservices.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {

  constructor(private noteservice:NoteservicesService) { }

  ngOnInit(): void {
  }

  allnotes() {
    this.noteservice.getnotes().subscribe(response => {
    this.allNotes = response.token;
    })
  }
  pin(noteId:number, notes) {
    if (notes.pinned == '0') {
      notes.pinned = '1';
      this.noteservice.updatePin(noteId, notes).subscribe(response => {
        console.log('pinned');
      })
    }
    else {
      notes.pinned = '1';
      this.noteservice.updatePin(noteId, notes).subscribe(response => {
        console.log('pinned');
      })
    }
  }

  archive(noteId:number, notes) {
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

  trash(noteId:number, notes) {
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
  setcolor(noteId, colorname){
    this.noteservice.setColor(noteId, colorname).subscribe( response => {
      console.log("color set");
    })
  }




 
  arrayOfColors = [
      { color: "rgb(255, 179, 255)", name: "pink" ,title: "firoz", description: "from karlapalem",isarchived:"true",istrash:"0"},
      { color: "rgb(255, 255, 128)", name: "darkGolden",title: "ershad", description: "from karlapalem" ,isarchived:"true",istrash:"0"},
      { color: "rgb(200, 232, 104)", name: "yellow" ,title: "shamsheer", description: "from karlapalem",isarchived:"false",istrash:"1"},
      { color: " rgb(158, 136, 191)", name: "darkYellow" ,title: "mallika", description: "from karlapalem",isarchived:"false",istrash:"1"},
      { color: "slategray", name: "grey" ,title: "karim", description: "from karlapalem",isarchived:"true",istrash:"0",},
      { color: "rgb(153, 221, 255)", name: "Teal" ,title: "sharmila", description: "from karlapalem",isarchived:"false",istrash:"1"},
      { color: "rgb(203,240,248)", name: "blue" ,title: "budi", description: "from karlapalem",isarchived:"true",istrash:"0"},
      { color: "rgb(174,203,250)", name: "Dark blue" ,title: "shabbir", description: "from karlapalem",isarchived:"false",istrash:"0"},
  ]

}
