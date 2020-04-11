import { Component, OnInit, Input } from '@angular/core';
import { NoteservicesService } from 'src/app/services/noteservices.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Note } from 'src/app/model/note.model';
import { Label } from 'src/app/model/label.model';

@Component({
  selector: 'app-displaynotes',
  templateUrl: './displaynotes.component.html',
  styleUrls: ['./displaynotes.component.scss']
})
export class DisplaynotesComponent implements OnInit {

 
  allnotes:any;
  Note: Note = new Note();
  param: any;
  labelNotes:any;
  gridView:any;
  search:any;
  constructor(private noteservice: NoteservicesService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.getLabelNote();
    this.noteservice.getAllNotes().subscribe( Response => this.allnotes=Response.data);
    this.route.queryParams.subscribe(params => {
      this.param = params['page'];
      this.gridView=  params['view'];
      if(this.param=='search'){
        this.search=params['searchValues'];
      }
    });
  }

  getLabelNote()
  {
    this.noteservice.getLabelNotes().subscribe(Response => {
      this.labelNotes=Response.data;
    })
  }


  findSearchedValue(){
    this.Note.search=this.search;
    this.Note.id=localStorage.token;
    this.noteservice.
  }

}
