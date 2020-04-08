import { Component, OnInit, Input } from '@angular/core';
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
  @Input() label:any;
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
    console.log('start');
    console.log(this.label);
    console.log('end');
    this.popup = false;
    if (this.createNoteForm.value.title != null || this.createNoteForm.value.description != null) {

      this.notes.title=this.createNoteForm.value.title;
      this.notes.description=this.createNoteForm.value.description;
      this.notes.labelname=this.label;
      this.notes.color=null;
      this.notes.ispinned=false;
      // console.log(this.notes);
      this.serviceObject.createNote(this.notes).subscribe( response => {
        console.log(response.message);
      })
    }
    else {
      this.popup = true;
    }
  }
}
