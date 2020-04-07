import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogueComponent } from '../dialogue/dialogue.component';
@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }


  openDialogue(){
this.dialog.open(DialogueComponent);
  }
}
