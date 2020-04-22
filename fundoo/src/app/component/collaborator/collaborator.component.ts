import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NoteservicesService } from 'src/app/services/noteservices.service';
import { Note } from 'src/app/model/note.model';

@Component({
  selector: 'app-collaborator',
  templateUrl: './collaborator.component.html',
  styleUrls: ['./collaborator.component.scss']
})
export class CollaboratorComponent implements OnInit {

  userData: any;
  colData: Note = new Note();
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private noteService: NoteservicesService, 
  public dialogRef: MatDialogRef<CollaboratorComponent>) { }

  ngOnInit() {
    this.userValues();
    // console.log(this.data);
  }

  userValues() {
    this.noteService.userValues().subscribe(Response => {
      this.userData = Response.data
    });
  }

  save(email, noteId) {
    this.colData.id = noteId;
    if (email != null && noteId != null) {
      this.colData.email = email;
      this.dialogRef.close({ collaborateData: this.colData });
    }
    else if (email != null && noteId == null) {
      this.dialogRef.close({ email: email });
    }
    else
      console.log("error");
  }

  deleteCollaboration(id){
    this.colData.id=id
    this.dialogRef.close({ deleteCol: this.colData });
  }
}
