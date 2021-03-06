import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Note } from 'src/app/model/note.model';
import { NoteservicesService } from 'src/app/services/noteservices.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogueComponent } from '../dialogue/dialogue.component';

@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.scss']
})
export class DisplayDataComponent implements OnInit {


  @Input() notes: Note = new Note();
  @Input() labels: any;
  @Input() param: any;
  @Output() output: EventEmitter<any> = new EventEmitter();
  color: Note = new Note();
  edit: boolean = false;
  getLabel: any;
  constructor(public dialog: MatDialog, private noteservice: NoteservicesService) {
  }

  ngOnInit() {
    this.getLabel = this.param;
  }


  OnClicktoUpdate(note) {
    if (note.istrash != true) {
      const dialogRef = this.dialog.open(DialogueComponent, {
        height: 'auto',
        width: '40%',
        data: { note: note },
        panelClass: 'custom-dialog-container',
      });
      dialogRef.afterClosed().subscribe(result => {
        if(result.updateData){
          this.noteservice.UpdateNotes(result.updateData).subscribe(response => {
            this.output.emit("ok");
          });
        }
        else {
          this.output.emit("ok");
        }
      });
    }
    else {
      console.log("can't edit the trash notes");
    }
  }

  deleteReminder(id) {
    this.color.id = id;
    this.noteservice.deleteReminder(this.color).subscribe(Response => {
      console.log(Response.message);
      this.output.emit("ok");
    })
  }

  removeLabel(id) {
    this.color.id = id;
    this.noteservice.deleteLabel(this.color).subscribe(Response => {
      console.log(Response.message)
      this.output.emit("ok");
    });
  }

  outputFunction(value) {
    this.output.emit(value);
  }

}
