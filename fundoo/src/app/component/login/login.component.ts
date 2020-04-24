import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FundooAccountServiceService } from 'src/app/fundoo-account-service.service';
import { Userdata } from 'src/app/model/userdata.model';
import { UserservicesService } from 'src/app/services/userservices.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email = new FormControl('', [
    Validators.required, Validators.email,]);
  password = new FormControl('', [
    Validators.required, Validators.minLength(6),]);


  userdata: Userdata = new Userdata();
  constructor(private router: Router, private userServices: UserservicesService, private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onLogin() {
    this.userdata.email = this.email.value;
    this.userdata.password = this.password.value;
    console.log(this.userdata);
    this.userServices.login(this.userdata).subscribe(response => {
      console.log(response);
      if (response.access_token) {
        localStorage.setItem('token', response.access_token);
        this.router.navigate(['fundoo/notes'], { queryParams: { page: 'notes', view: "row" } });
      // }
      // else {
        console.log(response.access_token);
      }
      else console.log("unauthorized error");
      
    });
  }
}
