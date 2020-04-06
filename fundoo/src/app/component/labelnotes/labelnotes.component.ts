import { Component, OnInit, Input } from '@angular/core';
import { Note } from 'src/app/model/note.model';

@Component({
  selector: 'app-labelnotes',
  templateUrl: './labelnotes.component.html',
  styleUrls: ['./labelnotes.component.scss']
})
export class LabelnotesComponent implements OnInit {

  @Input() labelName:any;
  @Input() notes:Note=new Note();
  @Input() allNotes:Note=new Note();
  constructor() { }

  ngOnInit(): void {
  }

}
