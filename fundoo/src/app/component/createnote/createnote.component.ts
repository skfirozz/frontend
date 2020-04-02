import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NoteservicesService } from 'src/app/services/noteservices.service';
import { Note } from 'src/app/model/note.model';
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
  constructor(private formBuilder: FormBuilder, private router: Router, private serviceObject: NoteservicesService) { }

  ngOnInit() {
    this.createNoteForm = this.formBuilder.group({
      title: [''],
      description: [''],
    }
    )
  }
  onPopup() {
    this.popup = true;
  }

  onSubmit() {
    console.log(this.createNoteForm.value)
    this.popup = false;
    if (this.createNoteForm.value.title != null || this.createNoteForm.value.description != null) {

      this.serviceObject.createNote(this.createNoteForm.value).subscribe((result) => {

        const temp = JSON.stringify(result);
        this.createNoteForm.value.title = null; this.createNoteForm.value.description = null;
        return "created";
      },
        () => {
          return "Failed to Create";
        });
      this.serviceObject.createNote(this.createNoteForm.value);
    }
    else {
      this.popup = true;
    }
  }
}
