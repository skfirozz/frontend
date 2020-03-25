import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NoteservicesService } from 'src/app/services/noteservices.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-createnote',
  templateUrl: './createnote.component.html',
  styleUrls: ['./createnote.component.scss']
})
export class CreatenoteComponent implements OnInit {

  popup: boolean = false;
  createNoteForm: FormGroup;
  token: string = sessionStorage.getItem('token');

  constructor(private formBuilder: FormBuilder, private router: Router, private serviceObject: NoteservicesService, private matSnackBar: MatSnackBar) { }

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
    // console.log(this.createNoteForm.value)
    this.popup = false;
    this.serviceObject.createNote(this.createNoteForm).subscribe(response => {
      this.matSnackBar.open('note created', 'ok', { duration: 5000 });
    },
      (error: any) => {
        console.log(error)
        this.matSnackBar.open('error in note creation', 'ok', { duration: 5000 });
      }
    );
  }

}
