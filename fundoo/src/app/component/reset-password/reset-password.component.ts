import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserservicesService } from 'src/app/services/userservices.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  confirmpassword = new FormControl('', [
    Validators.required, Validators.minLength(6),]);
  password = new FormControl('', [
    Validators.required, Validators.minLength(6),]);
  constructor(private route:ActivatedRoute, private userServices:UserservicesService , private router: Router) { }

  ngOnInit(): void {
  }

  reset(){
    if(this.confirmpassword.value!='' && this.password.value!='' && this.confirmpassword.value===this.password.value){
      let id= this.route.snapshot.paramMap.get('id');
      const data = {
        password: this.password.value
      };
      console.log("PASSWORD CHANGED SUCCESSFULLY");
      
      this.router.navigate(['/login']);
      // this.userServices.resetPassword(data,id).subscribe( Response => {
      //   console.log(Response);
      // })
    }
    else console.log("password mismatch")
  }
}
