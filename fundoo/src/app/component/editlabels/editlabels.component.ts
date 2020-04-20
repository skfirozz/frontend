import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA , MatDialogRef} from '@angular/material/dialog';
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
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private noteService: NoteservicesService,
  public dialogRef: MatDialogRef<EditlabelsComponent>) { }

  ngOnInit(): void {
  }

  createLabels(data) {
    if (data != null) {
      this.labelname.labelname = data;
      this.labelname.token=localStorage.token;
      if (this.data.labels.id == null){
        this.dialogRef.close({ createLabel: this.labelname });
      }
      else {
        this.labelname.noteid = this.data.labels.id;
        this.dialogRef.close({ editLabel: this.labelname });
      }
    }
    else if (data == null) {
      console.log("Label is empty..");
    }
  }
  // allLabels() {
  //   this.noteService.getallLabels().subscribe(Response => {
  //     this.allLabelNames = Response.data;
  //     console.log(Response.data);
  //   })
  // }

  deleteLabel(id) {
    this.labelname.id = id;
    this.dialogRef.close({ delteLabel: this.labelname });
  }

  editLabel() {
    this.edit = true;
  }
}
