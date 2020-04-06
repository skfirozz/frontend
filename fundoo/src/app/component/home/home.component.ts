import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { FundooAccountServiceService } from 'src/app/fundoo-account-service.service';
import { Note } from 'src/app/model/note.model';
import { NoteservicesService } from 'src/app/services/noteservices.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  searchData = new FormControl('', [
    Validators.required,]);
  labels: any;
  labelOper: boolean = false;
  labelName: any;
  allNotes: any;
  constructor(private serviceobj: NoteservicesService, private router: Router, private serviceObject: FundooAccountServiceService) { }

  ngOnInit() {
    this.getLabel();
    this.getAllNotes();
  }

  search() {
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

  getLabel() {
    // debugger;
    this.serviceobj.getallLabels().subscribe(response => {
      this.labels = response.data;
    })
    console.log(this.labels);
  }

  getAllNotes() {
    debugger;
    this.serviceobj.getAllNotes().subscribe(response => {
      this.allNotes = response.data;
    })
    console.log(this.allNotes);
  }

  labelOperation(label) {
    // debugger;
    if (this.labelOper == true) {
      this.labelOper = false;
    }
    else {
      this.labelOper = true;
    }
    this.labelName = label;

    console.log('working');
  }

  onsignout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
    console.log('logout successful');
  }
  showNote() {
    this.router.navigate(['fundoo/notes']);
  }
  showArchive() {
    this.router.navigate(['fundoo/archive']);
  }

  showTrash() {
    this.router.navigate(['fundoo/trash']);
  }

  showReminder() {
    this.router.navigate(['fundoo/reminder']);
  }
  editlabels() {
    this.router.navigate(['fundoo/editlabels']);
  }
}
