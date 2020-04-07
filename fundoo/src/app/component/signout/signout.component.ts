import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signout',
  templateUrl: './signout.component.html',
  styleUrls: ['./signout.component.scss']
})
export class SignoutComponent implements OnInit {

  @Input() user: any;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  SignOut() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

}
