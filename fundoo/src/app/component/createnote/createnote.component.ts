import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createnote',
  templateUrl: './createnote.component.html',
  styleUrls: ['./createnote.component.scss']
})
export class CreatenoteComponent implements OnInit {

  popup:boolean=false;
  createNoteForm:FormGroup;
  constructor(private formBuilder: FormBuilder,private router:Router) { }

  ngOnInit(){
    this.createNoteForm = this.formBuilder.group({
      title:[''],
      description:[''],
    }
    )
  }

  onSubmit() {
    console.log(this.createNoteForm.value)
    this.popup=false;
    this.router.navigate(['']);
  }

  onPopup() {
    this.popup=true;
  }


}
