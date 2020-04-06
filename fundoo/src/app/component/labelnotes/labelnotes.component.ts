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

  popup: boolean = true;
  param: any;
  allNotes:any;
  newLabel:Note =new Note();
  labels:any;
  constructor(private serviceobj:NoteservicesService,private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    this.getAllNotes();
    this.getlabels();
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

  getlabels()
  {
    this.serviceobj.getallLabels().subscribe( response => {
      this.labels = response.data;
    })
  }

  createLabel(labelName)
  {
    this.newLabel.label=labelName;
    this.newLabel.id=1;
    this.serviceobj.createLabel(this.newLabel).subscribe( response =>{
      console.log(response.message);
    })
  }
  
  done(){
    this.popup=false;
    this.router.navigate(['fundoo/notes'] , { queryParams : {page : 'notes'} });
  }

  deleteLabel(label){
    
  }
}
