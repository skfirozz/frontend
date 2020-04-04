import { Component, OnInit, Input } from '@angular/core';
import { Note } from 'src/app/model/note.model';

@Component({
  selector: 'app-labels',
  templateUrl: './labels.component.html',
  styleUrls: ['./labels.component.scss']
})
export class LabelsComponent implements OnInit {

  @Input() notes:Note= new Note();
  constructor() { }

  ngOnInit(): void {
  }

}
