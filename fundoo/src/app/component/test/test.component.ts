import { Component, OnInit } from '@angular/core';
import { NoteservicesService } from 'src/app/services/noteservices.service';
import { Label } from 'src/app/model/label.model';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  labelNotes:Label=new Label();
  constructor(private note:NoteservicesService) { }

  ngOnInit(): void {
    this.getvalues();
    // console.log(this.data);
  }


  getvalues()
  {
    this.note.getLabelNotes().subscribe(Response => {
      this.labelNotes=Response.data;
    })
  }

}
