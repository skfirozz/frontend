import { Component, OnInit } from '@angular/core';
import { NoteservicesService } from 'src/app/services/noteservices.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-displaynotes',
  templateUrl: './displaynotes.component.html',
  styleUrls: ['./displaynotes.component.scss']
})
export class DisplaynotesComponent implements OnInit {

  trashedNotes: boolean = false;
  archiveNotes: boolean = false;
  trashEmpty: boolean = false;
  labelNotes: boolean;

  notes: any;
  getAllNotes: [];
  private sub: any;
  private param: any;

  pin: boolean = true;
  unpin: boolean = true;
  constructor(private noteservice: NoteservicesService, private route: ActivatedRoute, private router: Router) {
    this.sub = this.route
      .queryParams
      .subscribe(params => {
        this.param = params['page'] || '';
        if (this.param == "archive") {
          console.log("archive");
          this.getAllArchiveNotes();
        }
        else if (this.param == "trash") {
          console.log("trash");
          this.getAllTrashedNotes();
        }
        else {
          console.log("display");
          this.displayNotes();
        }
      });
  }

  ngOnInit(): void {
  }


  arrayOfColors = [
    [
      { color: "rgb(255, 179, 255)", name: "pink" ,title: "firoz", description: "from karlapalem",isarchived:"1",istrash:"0"},
      { color: "rgb(255, 255, 128)", name: "darkGolden",title: "ershad", description: "from karlapalem" ,isarchived:"1",istrash:"0"},
      { color: "rgb(200, 232, 104)", name: "yellow" ,title: "shamsheer", description: "from karlapalem",isarchived:"0",istrash:"1"},
      { color: " rgb(158, 136, 191)", name: "darkYellow" ,title: "mallika", description: "from karlapalem",isarchived:"0",istrash:"1"}
    ],
    [
      { color: "slategray", name: "grey" ,title: "karim", description: "from karlapalem",isarchived:"1",istrash:"0",},
      { color: "rgb(153, 221, 255)", name: "Teal" ,title: "sharmila", description: "from karlapalem",isarchived:"0",istrash:"1"},
      { color: "rgb(203,240,248)", name: "blue" ,title: "budi", description: "from karlapalem",isarchived:"1",istrash:"0"},
      { color: "rgb(174,203,250)", name: "Dark blue" ,title: "shabbir", description: "from karlapalem",isarchived:"1",istrash:"0"},
    ]
  ]
  onPin(noteId) {
    console.log("on pin called");

    this.noteservice.pinNotes(noteId).subscribe(response => {
      if (!this.pin) {
        this.pin = true;
      }
      if (!this.unpin) {
        this.unpin = true;
      }
    },
      (error: any) => {
        console.log('error');
      });
  }


  displayNotes() {
    this.trashedNotes = false;
    this.archiveNotes = false;
    this.labelNotes = false;
    this.trashEmpty = false;

    console.log("Display Notes Call");
    this.noteservice.getNotesList().subscribe(message => {
      this.notes = message.notes;
      console.log(this.notes);
    });
  }

  getAllTrashedNotes() {
    this.trashedNotes = true;
    this.archiveNotes = false;
    this.labelNotes = false;

    console.log("trashed Notes subscribe..");
    this.noteservice.getTrashedNotesList().subscribe(message => {
      console.log("trashed Notes subscribe..", message.notes);
      this.notes = message.notes;
      console.log("final trsah data" + this.trashedNotes);
      if (this.notes == null) {
        this.trashEmpty = true;
      } else {
        this.trashEmpty = false;
      }

    });
  }

  getAllArchiveNotes() {
    this.archiveNotes = true;
    this.trashedNotes = false;
    this.trashEmpty = false;
    this.labelNotes = false;

    this.noteservice.getArchiveNotesList().subscribe(message => {
      this.notes = message.notes;
      console.log(this.notes);
    });
  }


}
