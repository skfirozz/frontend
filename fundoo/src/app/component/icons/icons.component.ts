import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Note } from 'src/app/model/note.model';
import { NoteservicesService } from 'src/app/services/noteservices.service';
import { MatDialog } from '@angular/material/dialog';
import { EditlabelsComponent } from '../editlabels/editlabels.component';
import { Label } from 'src/app/model/label.model';
import { ReminderComponent } from '../reminder/reminder.component';
import { CollaboratorComponent } from '../collaborator/collaborator.component';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {

  @Input() param: any;
  @Input() notes: Note = new Note();
  @Output() output: EventEmitter<any> = new EventEmitter();
  value: Label = new Label();


  time = "8:00 AM";
  repeat = "daily";
  reminder: Note = new Note();
  day = "Today";
  todayString: string = new Date().toDateString();


  constructor(public dialog: MatDialog, private noteservice: NoteservicesService) { }
  color: Note = new Note();
  ngOnInit(): void {
  }


  unTrash(noteId: number, notes) {
    this.color.id = noteId;
    this.color.istrash = 0;
    this.noteservice.updateTrash(this.color).subscribe(response => {
      console.log(response.message);
      this.getOutput();
    })
  }



  delete(noteId: number) {
    this.color.id = noteId;
    this.noteservice.deleteNotes(this.color).subscribe(response => {
      console.log(response.message);
      this.getOutput();
    })
  }

  archive(noteId: number, notes) {
    this.color.id = noteId;
    if (notes == 0)
      this.color.isarchived = 1;
    else
      this.color.isarchived = 0;
    this.noteservice.updateArchive(this.color).subscribe(Response => {
      console.log(Response.message)
      this.getOutput();
    });
  }

  getOutput() {
    this.output.emit("ok");
  }

  trash(noteId: number, notes) {
    this.color.id = noteId;
    if (notes == 1)
      this.color.istrash = 0;
    else
      this.color.istrash = 1;
    this.noteservice.updateTrash(this.color).subscribe(response => {
      console.log(response.message);
      this.getOutput();
    })

  }

  setcolor(noteId, colorname) {
    this.color.id = noteId;
    this.color.color = colorname;
    this.noteservice.setColor(this.color).subscribe(response => {
      console.log(response.message);
      this.getOutput();
    })
  }

  addLabel(labels) {
    console.log(labels);
    this.value.noteid = labels;
    const dialogRef = this.dialog.open(EditlabelsComponent, {
      data: { labels: labels },
      panelClass: 'custom-dialog-container'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.noteservice.createLabel(result.editLabel).subscribe(Response => {
        this.getOutput();
      })
    });
  }

  setTime(value){
    this.time=value;
  }

  setRepitation(value){
    this.repeat=value;
  }

  save(date,noteid){
    let str: any;
    if (date != "") {
      let v = new Date(date);
      str = v.toDateString();
    }
    else  str = this.day;
    this.reminder.reminder = str + " " + this.time;
    if(noteid!=undefined){
      this.reminder.id= noteid;
      this.noteservice.addReminder(this.reminder).subscribe(Response => {
        console.log(Response);
        this.getOutput();
      })
    }
  }

  collaborator(id) {
    const dialogRef = this.dialog.open(CollaboratorComponent, {
      data: { notes: id },
      panelClass: 'custom-dialog-container'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.noteservice.addCollaborator(result.collaborateData).subscribe(Response => {
        this.getOutput();
      });
    });
  }

  arrayofColors = [
    [
      { color: "rgb(255,255,255)", name: "white" },
      { color: "#e07663", name: "red" },
      { color: "#e9a065", name: "orange" },
      { color: "#d2e46b", name: "yellow" }
    ],
    [
      { color: "#79e46b", name: "green" },
      { color: "rgb(0,128,128)", name: "teal" },
      { color: "#70e2e6", name: "light blue" },
      { color: "#6a9ac2", name: " blue" }
    ],
    [
      { color: "rgb(128,0,128)", name: "purple" },
      { color: "rgb(255,192,203)", name: "pink" },
      { color: "rgb(165,42,42)", name: "brown" },
      { color: "rgb(128,128,128)", name: "gray" }
    ]
  ]
}
