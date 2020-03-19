import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FundooAccountServiceService } from 'src/app/fundoo-account-service.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {

  email = new FormControl('', [
    Validators.required, Validators.email, ]);
  constructor(private serviceObject: FundooAccountServiceService, private router: Router) { }

  ngOnInit() {
  }

  onForgot() {
    const data = {
      email: this.email.value,
    };
    console.log(data);
    this.serviceObject.getForgotValue(data).subscribe((result) => {
      const temp = JSON.stringify(result);
      const results = JSON.parse(temp);
      // console.log(results.message, ':', results);
      this.router.navigate(['/dashboard']);
    });
    this.serviceObject.getForgotValue(data);
  }
}
