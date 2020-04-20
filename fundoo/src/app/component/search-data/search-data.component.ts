import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/model/note.model';
import { NoteservicesService } from 'src/app/services/noteservices.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-data',
  templateUrl: './search-data.component.html',
  styleUrls: ['./search-data.component.scss']
})
export class SearchDataComponent implements OnInit {
  search: any;
  searchedData: any;
  Note: Note = new Note();
  // param="row";
  constructor(private noteservice:NoteservicesService, private router : ActivatedRoute) { }

  gridView:string="row";

  ngOnInit(): void {

    // debugger;
    this.router.queryParams.subscribe ( params => {
      this.searchedData = params["data"];
      this.findSearchedValue();
    });
    
  }

  findSearchedValue() {
    // debugger;
    this.Note.search = this.searchedData;
    this.Note.token = localStorage.token;
    this.noteservice.search(this.Note).subscribe(Response =>{
      this.search=Response.data;
      console.log("testing");
      console.log(this.Note);
      console.log(Response.data)
    });
  }
}
