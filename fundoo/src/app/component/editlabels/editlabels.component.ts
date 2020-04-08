import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NoteservicesService } from 'src/app/services/noteservices.service';
import { Label } from 'src/app/model/label.model';

@Component({
  selector: 'app-editlabels',
  templateUrl: './editlabels.component.html',
  styleUrls: ['./editlabels.component.scss']
})
export class EditlabelsComponent implements OnInit {

  edit:boolean=false;
  nameLabel:any;
  labelname:Label = new Label();
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private noteService: NoteservicesService) {}

  ngOnInit(): void {
  }

  createLabels(data,id) {
    debugger;
    if (data != null) {
      // console.log(" label is: " + data);
      this.labelname.labelname=data;
      this.labelname.noteid=id;
      this.noteService.createLabel(this.labelname).subscribe(response => {
      window.location.reload();    });
    }
    else if (data == null) {
      console.log("Label is empty..");
    }
  }

  done() {

  }

  deleteLabel(id)
  {
    this.labelname.id=id;
    this.noteService.deleteLabel(this.labelname).subscribe( response => {
      console.log(response.message);
    })
    console.log("your output: " + id);
  }

  editLabel() {
    this.edit=true;
  }
}
