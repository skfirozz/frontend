import { Component, OnInit, Input, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NoteservicesService } from 'src/app/services/noteservices.service';
import { Note } from 'src/app/model/note.model';

@Component({
  selector: 'app-signout',
  templateUrl: './signout.component.html',
  styleUrls: ['./signout.component.scss']
})
export class SignoutComponent implements OnInit {

  val: any;
  selectedFile: File;
  profileData: Note = new Note();
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private router: Router, private noteService: NoteservicesService) { }

  ngOnInit(): void {
    this.selectedFile;
  }

  public onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }

  onUpload() {
    console.log(this.selectedFile.name);
    if (this.selectedFile.name != null) {
      this.profileData.token = localStorage.token;
      this.profileData.profilePic = this.selectedFile.name;
      this.noteService.updateProfile(this.profileData).subscribe(Response => {
        console.log(Response.message);
      })
      location.reload();
    }
  }

  SignOut() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
    console.log('logout successful');
  }
}
