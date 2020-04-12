import { Component, OnInit, Input } from '@angular/core';
import { Note } from 'src/app/model/note.model';
import { NoteservicesService } from 'src/app/services/noteservices.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogueComponent } from '../dialogue/dialogue.component';
import { Label } from 'src/app/model/label.model';

@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.scss']
})
export class DisplayDataComponent implements OnInit {

  
  @Input() notes: Note = new Note();
  @Input() labels:any;
  @Input() param:any;
  color: Note = new Note();
  edit: boolean = false;
  getLabel:any;
  constructor( public dialog:MatDialog,private noteservice: NoteservicesService) { 
  }

  ngOnInit() {
  debugger;
  this.getLabel=this.param;
  }

 
  OnClicktoUpdate(note) {
    console.log("notes :" + note);
    if(note.istrash!=true)
    {
      const dialogRef = this.dialog.open(DialogueComponent, {
        height: '30%',
        width: '40%',
        data: { note: note },
        panelClass: 'backdropBackground',
      });
      dialogRef.afterClosed().subscribe(result => {
        note = result;
      });
    }
    else{
      console.log("can't edit the trash notes");
    }
  }

  deleteReminder(id){
    this.color.id=id;
    this.noteservice.deleteReminder(this.color).subscribe( Response => {
      console.log(Response.message);
    })
    location.reload();
  }

  removeLabel(id){
    this.color.id=id;
    this.noteservice.deleteLabel(this.color).subscribe( Response => {
      console.log(Response.message)
    })
    location.reload();
  }

}
