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

  allLabelNames: any;
  edit: boolean = false;
  nameLabel: any;
  labelname: Label = new Label();
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private noteService: NoteservicesService) { }

  ngOnInit(): void {
    // this.allLabels();
  }

  createLabels(data) {
    debugger;
    if (data != null) {
      this.labelname.labelname = data;
      if (this.data.labels.id == null)
        this.labelname.noteid = null;
      else {
        this.labelname.noteid = this.data.labels.id;
      }
      this.labelname.token=localStorage.token;
      this.noteService.createLabel(this.labelname).subscribe(response => {
        window.location.reload();
      
      });
    }
    else if (data == null) {
      console.log("Label is empty..");
    }
  }

  done() {

  }
  // allLabels() {
  //   this.noteService.getallLabels().subscribe(Response => {
  //     this.allLabelNames = Response.data;
  //     console.log(Response.data);
  //   })
  // }

  deleteLabel(id) {
    this.labelname.id = id;
    this.noteService.deleteLabel(this.labelname).subscribe(response => {
      console.log(response.message);
    })
    console.log("your output: " + id);
    // window.location.reload();
  }

  editLabel() {
    this.edit = true;
  }
}
