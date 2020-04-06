import { Component, OnInit, Input } from '@angular/core';
import { Note } from 'src/app/model/note.model';
import { ActivatedRoute } from '@angular/router';
import { NoteservicesService } from 'src/app/services/noteservices.service';

@Component({
  selector: 'app-labelnotes',
  templateUrl: './labelnotes.component.html',
  styleUrls: ['./labelnotes.component.scss']
})
export class LabelnotesComponent implements OnInit {

  param: any;
  allNotes:any;
  constructor(private serviceobj:NoteservicesService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.getAllNotes();
    this.route.queryParams.subscribe( params =>{
      this.param=params['page']|| '';
      console.log(this.param);
    });
  }

  getAllNotes() {
    // debugger;
    this.serviceobj.getAllNotes().subscribe(response => {
      this.allNotes = response.data;
    })
    console.log(this.allNotes);
  }

  

}
