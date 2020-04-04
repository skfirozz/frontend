import { Component, OnInit, Input } from '@angular/core';
import { Note } from 'src/app/model/note.model';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

  @Input() note: Note =new Note();
  constructor() { }

  ngOnInit(): void {
  }

}
