import { Component, OnInit, Input } from '@angular/core';
import { Note } from 'src/app/model/note.model';
import { ActivatedRoute, Router } from '@angular/router';
import { NoteservicesService } from 'src/app/services/noteservices.service';

@Component({
  selector: 'app-labelnotes',
  templateUrl: './labelnotes.component.html',
  styleUrls: ['./labelnotes.component.scss']
})
export class LabelnotesComponent implements OnInit {

  param: any;
  allNotes: Note=new Note();
  labelNotes:any;
  gridView:any;
  constructor(private serviceobj: NoteservicesService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getAllNotes();
    this.getLabelNote();
    this.route.queryParams.subscribe(params => {
      this.param = params['page'] ;
      this.gridView= params['view'];
      console.log(this.param);
    });
  }
  getAllNotes() {
    // debugger;
    this.serviceobj.getAllNotes().subscribe(Response => {
      this.allNotes = Response.data;
    });
  }

  getLabelNote()
  {
    this.serviceobj.getLabelNotes().subscribe(Response => {
    this.labelNotes=Response.data;
      console.log("------------------");
      console.log(Response.data);
      console.log("------------------");
    })
  }
}
