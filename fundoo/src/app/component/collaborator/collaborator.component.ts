import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NoteservicesService } from 'src/app/services/noteservices.service';

@Component({
  selector: 'app-collaborator',
  templateUrl: './collaborator.component.html',
  styleUrls: ['./collaborator.component.scss']
})
export class CollaboratorComponent implements OnInit {

  userData:any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private noteServices:NoteservicesService) { }

  ngOnInit(): void {
    this.noteServices.
    
  }

}
