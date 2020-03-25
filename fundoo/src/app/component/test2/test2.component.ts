import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.scss']
})
export class Test2Component implements OnInit {

  @Input()
  all: number;

  @Input()
  female: number;

  @Input()
  male: number;


  constructor() { }

  ngOnInit(): void {
  }

}
