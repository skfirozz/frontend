import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NoteservicesService } from 'src/app/services/noteservices.service';

@Component({
  selector: 'app-editlabels',
  templateUrl: './editlabels.component.html',
  styleUrls: ['./editlabels.component.scss']
})
export class EditlabelsComponent implements OnInit {

  edit:boolean=false;
  nameLabel:any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private noteService: NoteservicesService) {}

  ngOnInit(): void {
  }

  createLabels(data) {
    debugger;
    if (data != null) {
      console.log(" label is: " + data);
      // this.noteService.createLabel(data).subscribe(response => {
      // window.location.reload();    });
    }
    else if (data == null) {
      console.log("Label is empty..");
    }
    
  }

  done() {

  }

  editLabel() {
    this.edit=true;
  }
}
