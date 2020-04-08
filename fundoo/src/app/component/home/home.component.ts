import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { FundooAccountServiceService } from 'src/app/fundoo-account-service.service';
import { Note } from 'src/app/model/note.model';
import { NoteservicesService } from 'src/app/services/noteservices.service';
import { MatDialog } from '@angular/material/dialog';
import { EditlabelsComponent } from '../editlabels/editlabels.component';

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

  view: boolean = false;
  grid = "row";

  id: any;
  constructor(public dialog: MatDialog, private serviceobj: NoteservicesService, private router: Router, private activateRoute: ActivatedRoute, private serviceObject: FundooAccountServiceService) { }

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

    console.log('hiii wr' + this.labels);
  }

  getAllNotes() {
    // debugger;
    this.serviceobj.getAllNotes().subscribe(response => {
      this.allNotes = response.data;
    })
    console.log(this.allNotes);
  }

  labelOperation(label) {
    // debugger;
    this.labelName = label;
    this.labelOper == true
    this.router.navigate(['fundoo/labels'], { queryParams: { page: label , view: this.grid } });
    console.log('working');
  }

  onsignout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
    console.log('logout successful');
  }
  showNote() {
    this.router.navigate(['fundoo/notes'], { queryParams: { page: 'notes', view: this.grid } });
  }
  showArchive() {
    this.router.navigate(['fundoo/notes'], { queryParams: { page: 'archive',view: this.grid } });
  }

  showTrash() {
    this.router.navigate(['fundoo/notes'], { queryParams: { page: 'trash',view: this.grid } });
  }

  showReminder() {
    this.router.navigate(['fundoo/reminder']);
  }
  editlabels(labels) {
    // debugger;
    console.log(labels);
    const dialogRef = this.dialog.open(EditlabelsComponent, {
      data: { labels: labels },
      panelClass: 'custom-dialog-container'
    });
    dialogRef.afterClosed().subscribe(result => {
      labels = result;
    });
  }

  labelNotes() {
    this.router.navigate(['fundoo/labels/' + this.id])
  }

  gridView() {
    debugger;
    if(this.view==true){
      this.view=false;
      this.grid="row"
    }
    else{
      this.view=true;
      this.grid="column"
    }
    console.log(this.view);
  }
}
