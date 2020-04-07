import { Component, OnInit, Input, Inject } from '@angular/core';
import { Note } from 'src/app/model/note.model';

import { NoteservicesService } from 'src/app/services/noteservices.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-updatenote',
  templateUrl: './updatenote.component.html',
  styleUrls: ['./updatenote.component.scss']
})
export class UpdatenoteComponent implements OnInit {

  // @Input() notes: Note = new Note();

  constructor( private noteService: NoteservicesService, private snakbar: MatSnackBar) { }

  ngOnInit(): void {
  }

}