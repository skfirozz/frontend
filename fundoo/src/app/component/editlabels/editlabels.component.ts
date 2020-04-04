import { Component, OnInit, Input } from '@angular/core';
import { Note } from 'src/app/model/note.model';
import { NoteservicesService } from 'src/app/services/noteservices.service';

@Component({
  selector: 'app-editlabels',
  templateUrl: './editlabels.component.html',
  styleUrls: ['./editlabels.component.scss']
})
export class EditlabelsComponent implements OnInit {

  newLabel:Note =new Note();
  notes:any;
  constructor(private noteService:NoteservicesService) { }

  ngOnInit(): void {
    this.getlabels();
  }

  getlabels()
  {
    this.noteService.getallLabels().subscribe( response => {
      this.notes = response.data;
    })
  }

  createLabel(labelName)
  {
    this.newLabel.label=labelName;
    this.newLabel.id=1;
    this.noteService.createLabel(this.newLabel).subscribe( response =>{
      console.log(response.message);
    })
  }

}
