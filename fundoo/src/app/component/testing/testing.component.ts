import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/model/note.model';
import { NoteservicesService } from 'src/app/services/noteservices.service';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss']
})
export class TestingComponent implements OnInit {

  userDataValues:any;
  notes: Note = new Note();
  constructor(private services:NoteservicesService) { }

  ngOnInit(): void {
  }

  userValues(){
    this.notes.token=localStorage.token;
    // console.log(this.notes);
    // this.services.getAllNotes().subscribe( Response => {
    //   console.log(Response);
    // })

    this.services.getAllNotes().subscribe( Response => {
      console.log(Response);
    })

  }



}
