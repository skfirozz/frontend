import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NoteservicesService } from 'src/app/services/noteservices.service';
import { Note } from 'src/app/model/note.model';
import { MatDialog } from '@angular/material/dialog';
import { CollaboratorComponent } from '../collaborator/collaborator.component';
// import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-createnote',
  templateUrl: './createnote.component.html',
  styleUrls: ['./createnote.component.scss']
})
export class CreatenoteComponent implements OnInit {

  popup: boolean = false;
  createNoteForm: FormGroup;
  notes: Note = new Note();
  @Input() label: any;
  @Input() reminder: any;
  @Output() output: EventEmitter<any> = new EventEmitter();
  noteColor: string;
  isarchive = 0;
  id: number;
  collaborator: string;

  time = "8:00 AM";
  repeat = "daily";
  day = "Today";
  todayString: string = new Date().toDateString();

  constructor(private formBuilder: FormBuilder, private router: Router, private serviceObject: NoteservicesService, public dialog: MatDialog) { }

  ngOnInit() {
    this.createNoteForm = this.formBuilder.group({
      title: [''],
      description: [''],
    })
  }
  onOpen() {
    this.popup = true;
  }

  createNote() {
    this.popup = false;
    if (this.createNoteForm.value.title != "" || this.createNoteForm.value.description != "") {
      this.notes.title = this.createNoteForm.value.title;
      this.notes.description = this.createNoteForm.value.description;
      this.notes.labelname = this.label;
      this.notes.color = this.noteColor;
      this.notes.ispinned = 0;
      this.notes.isarchived = this.isarchive;
      this.notes.reminder = this.reminder;
      this.notes.collaborator = this.collaborator;
      this.notes.token = localStorage.token;
      this.serviceObject.createNote(this.notes).subscribe(response => {
        console.log(response.message);
        this.afterSubmit();
        this.output.emit("ok");
      })
    }
    else {
    this.afterSubmit();    
    }
  }

  afterSubmit(){
    this.popup = false;
    this.noteColor = null;
    this.collaborator = null;
    this.isarchive = 0;
    this.createNoteForm.value.title="";
    this.createNoteForm.value.description="";
  }

  removeLabel() {
    this.label = null;
    this.reminder = null;
  }

  setColor(colorName) {
    this.noteColor = colorName;
  }

  archive() {
    if (this.isarchive == 0)
      this.isarchive = 1;
    else this.isarchive = 0;
  }

  setCollaborator() {
    const dialogRef = this.dialog.open(CollaboratorComponent, {
      data: { notes: this.id },
      panelClass: 'custom-dialog-container'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.collaborator = result.email;
    });
  }

  addLabels(label){
    this.label=label;
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



  setTime(value) {
    this.time = value;
  }

  setRepitation(value) {
    this.repeat = value;
  }

  save(date) {
    let str: any;
    if (date != "") {
      let v = new Date(date);
      str = v.toDateString();
    }
    else str = this.day;
    let changedReminder = str + " " + this.time;
    this.reminder = changedReminder;
  }

}
