import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FundooAccountServiceService } from 'src/app/fundoo-account-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email = new FormControl('', [
    Validators.required, Validators.email, ]);
  password = new FormControl('', [
    Validators.required, Validators.minLength(6), ]);


  constructor(private router: Router, private serviceObject: FundooAccountServiceService) { }

  ngOnInit(): void {
  }

  onLogin() {
    const data = {
      password: this.password.value,
      email: this.email.value,
    };
    // console.log(data);
    this.serviceObject.getLoginValue(data).subscribe((result) => {
      const temp = JSON.stringify(result);
      const results = JSON.parse(temp);
      // console.log(results.message, ':', results);
      this.router.navigate(['notes']);
    });
    this.serviceObject.getLoginValue(data);
}


}
