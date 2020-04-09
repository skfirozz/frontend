import { Component, OnInit } from '@angular/core';
import { NoteservicesService } from 'src/app/services/noteservices.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  data:any;
  constructor(private note:NoteservicesService) { }

  ngOnInit(): void {
    this.getvalues();
    console.log(this.data);
  }


  getvalues()
  {
    //debugger;
    this.note.getAllNotes().subscribe(Response => {
      console.log(Response.data);
    })

  }

}
