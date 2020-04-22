import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FundooAccountServiceService } from 'src/app/fundoo-account-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  hide = true;
  constructor(private serviceObject: FundooAccountServiceService, private router: Router) { }

  firstName = new FormControl('', [
    Validators.required, Validators.minLength(4), Validators.pattern('^[a-zA-Z]*'),]);
  lastName = new FormControl('', [
    Validators.required, Validators.minLength(4), Validators.pattern('^[a-zA-Z]*'),]);
  email = new FormControl('', [
    Validators.required, Validators.email,]);
  password = new FormControl('', [
    Validators.required, Validators.minLength(6),]);
  confirmPassword = new FormControl('', [
    Validators.required, Validators.minLength(6),]);

  ngOnInit() {
  }

  onRegistrationForm() {
    if (this.password.value === this.confirmPassword.value && this.email.value != '' && this.firstName.value != '' && this.lastName.value != '') {
      const data = {
        firstName: this.firstName.value,
        lastName: this.lastName.value,
        email: this.email.value,
        password: this.password.value,
      };
      console.log(data);
      this.serviceObject.getRegisterValue(data).subscribe((result) => {
        const temp = JSON.stringify(result);
        const results = JSON.parse(temp);
        this.router.navigate(['/login']);
      });
      this.serviceObject.getRegisterValue(data);
    }
  }
}
