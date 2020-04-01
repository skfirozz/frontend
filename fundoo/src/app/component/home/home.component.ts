import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { FundooAccountServiceService } from 'src/app/fundoo-account-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  searchData = new FormControl('', [
    Validators.required, ]);
  constructor( private router: Router, private serviceObject: FundooAccountServiceService ) { }

  ngOnInit(): void {
  }

  
  search()
  {
    const data = {
      searchData: this.searchData.value,
    };
    console.log(data);
    this.serviceObject.geSearchValue(data).subscribe((result) => {
      const temp = JSON.stringify(result);
      const results = JSON.parse(temp);
      this.router.navigate(['']);
    });
    this.serviceObject.geSearchValue(data);
  }

  showNote()
  {
    this.router.navigate(['notes']);
  }
  showArchive()
  {
    this.router.navigate(['archive']);
  }

  showTrash()
  {
    this.router.navigate(['trash']);
  }

  showReminder()
  {
    this.router.navigate(['reminder']);
  }
  editlabels()
  {
    this.router.navigate(['editlabels']);
  }
}
