import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NoteservicesService } from 'src/app/services/noteservices.service';
import { Note } from 'src/app/model/note.model';

@Component({
  selector: 'app-collaborator',
  templateUrl: './collaborator.component.html',
  styleUrls: ['./collaborator.component.scss']
})
export class CollaboratorComponent implements OnInit {

  userData:any;
  colData:Note=new Note();
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private noteService:NoteservicesService) { }

  ngOnInit(){
  this.userValues();
  }

  userValues(){
    // debugger;
    this.noteService.userValues().subscribe( Response => {
      this.userData=Response.data
      console.log(Response.data);
    });
  }

  save(email,noteId){
    this.colData.id=noteId;
    if(email!=null){
    this.colData.email=email;
    this.noteService.addCollaborator(this.colData).subscribe(Response => console.log(Response.message));  
  }
    else
    console.log("error");
  }
}
