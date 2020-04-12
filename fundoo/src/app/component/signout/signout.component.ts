import { Component, OnInit, Input, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NoteservicesService } from 'src/app/services/noteservices.service';

@Component({
  selector: 'app-signout',
  templateUrl: './signout.component.html',
  styleUrls: ['./signout.component.scss']
})
export class SignoutComponent implements OnInit {

  val: any;
  selectedFile: File;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private router: Router, private noteService: NoteservicesService) { }

  ngOnInit(): void {
    this.selectedFile;
  }

  public onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }

  onUpload() {
    console.log(this.selectedFile.name);
    if(this.selectedFile.name!=null){
      
    }
  }

  SignOut() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
    console.log('logout successful');
  }
}
