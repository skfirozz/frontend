import { Component, OnInit, Input } from '@angular/core';
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

  color: Note = new Note();
  edit: boolean = false;
  getLabel:any;
  constructor( public dialog:MatDialog,private noteservice: NoteservicesService) { }

  ngOnInit() {
    this.getLabelNotes();
  }

 
  OnClicktoUpdate(note) {
    console.log("notes :" + note);
    if(note.istrash!=true)
    {
      const dialogRef = this.dialog.open(DialogueComponent, {
        data: { note: note },
        panelClass: 'custom-dialog-container'
      });
      dialogRef.afterClosed().subscribe(result => {
        note = result;
      });
    }
    else{
      console.log("can't edit the trash notes");
    }
  }

  getLabelNotes()
  {
    // debugger;
    this.noteservice.getLabelNotes().subscribe( response => {
      this.getLabel = response.data;
    })
    console.log(this.getLabel);
  }

}
