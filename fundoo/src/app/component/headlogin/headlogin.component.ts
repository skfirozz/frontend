import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-headlogin',
  templateUrl: './headlogin.component.html',
  styleUrls: ['./headlogin.component.scss']
})
export class HeadloginComponent implements OnInit {

  userName: string = '';
  @Output() login = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  submit() {
    console.log(this.userName)
    this.login.emit(this.userName);
  }
}
