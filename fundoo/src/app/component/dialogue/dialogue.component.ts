import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Note } from 'src/app/model/note.model';

@Component({
  selector: 'app-dialogue',
  templateUrl: './dialogue.component.html',
  styleUrls: ['./dialogue.component.scss']
})
export class DialogueComponent implements OnInit {

  @Output() output: EventEmitter<any> = new EventEmitter();
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,public dialogRef: MatDialogRef<DialogueComponent>) { }

  passData: Note = new Note();
  ngOnInit(): void {
  }

  updateNote(title, description, noteId) {
    this.passData.id = noteId;
    this.passData.description = description;
    this.passData.title = title;
    this.dialogRef.close({ updateData: this.passData });
  }

  outputFunction(value) {
    this.dialogRef.close({ resu: value });
  }
}
