import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Note } from 'src/app/model/note.model';
import { NoteservicesService } from 'src/app/services/noteservices.service';
import { MatDialog } from '@angular/material/dialog';
import { EditlabelsComponent } from '../editlabels/editlabels.component';
import { Label } from 'src/app/model/label.model';
import { ReminderComponent } from '../reminder/reminder.component';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {

  @Input() notes: Note = new Note();
  @Output() outputProperty = new EventEmitter<any>();
  value: Label = new Label();
  constructor(public dialog: MatDialog, private noteservice: NoteservicesService) { }
  color: Note = new Note();
  ngOnInit(): void {
  }


  unTrash(noteId: number, notes) {
    // debugger;
    this.color.id = noteId;
    this.color.istrash = false;
    this.noteservice.updateTrash(this.color).subscribe(response => {
      console.log(response.message);
    })
    window.location.reload();
  }

  delete(noteId: number) {
    // debugger;
    this.color.id = noteId;
    this.noteservice.deleteNotes(this.color).subscribe(response => {
      console.log(response.message);
    })
    window.location.reload();
  }

  archive(noteId: number, notes) {
    debugger;
    this.color.id = noteId;
    if(notes==0)
      this.color.isarchived=1;  
    else
    this.color.isarchived=0;
    this.noteservice.updateArchive(this.color).subscribe( Response => console.log(Response.message));
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
    // debugger;
    this.color.color = colorname;
    this.noteservice.setColor(this.color).subscribe(response => {
      console.log(response.message);
    })
    window.location.reload();
  }

  addLabel(labels) {

    console.log(labels);
    this.value.noteid = labels;
    const dialogRef = this.dialog.open(EditlabelsComponent, {
      data: { labels:labels },
      panelClass: 'custom-dialog-container'
    });
    dialogRef.afterClosed().subscribe(result => {
      labels = result;
    });
  }

  reminder(labels) {
    // debugger;
    console.log(labels);
    const dialogRef = this.dialog.open(ReminderComponent, {
      data: { labels: labels },
      panelClass: 'custom-dialog-container'
    });
    dialogRef.afterClosed().subscribe(result => {
      labels = result;
    });
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
