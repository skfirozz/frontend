import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { FundooAccountServiceService } from 'src/app/fundoo-account-service.service';
import { Note } from 'src/app/model/note.model';
import { NoteservicesService } from 'src/app/services/noteservices.service';
import { MatDialog } from '@angular/material/dialog';
import { EditlabelsComponent } from '../editlabels/editlabels.component';
import { Label } from 'src/app/model/label.model';
import { SignoutComponent } from '../signout/signout.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  searchData = new FormControl('', [
  Validators.required,]);
  labels: Label = new Label();
  labelOper: boolean = false;
  labelName: any;
  allNotes: any;
  userValues:any;

  view: boolean = false;
  grid = "row";

  id: any;
  constructor(public dialog: MatDialog, private serviceobj: NoteservicesService, private router: Router, private activateRoute: ActivatedRoute, private serviceObject: FundooAccountServiceService) { }

  ngOnInit() {
    this.getLabel();
    this.userDatas();
  }

  search(searchData) {
    debugger;
    if(searchData!=null){
      console.log("value is null");
    }
    else{
      console.log(searchData);
    }
    
  }

  getLabel() {
    // debugger;
    this.serviceobj.getallLabels().subscribe(response => {
      this.labels = response.data;
      console.log('checcking');
      console.log( response.data);
    })
  }

  labelOperation(label) {
    // debugger;
    this.labelName = label;
    this.labelOper == true
    this.router.navigate(['fundoo/labels'], { queryParams: { page: label , view: this.grid } });
    console.log('working');
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
    this.router.navigate(['fundoo/notes'], { queryParams: { page: 'reminder',view: this.grid } });
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

  gridView() {
    // debugger;
    if(this.view==true){
      this.view=false;
      this.grid="row";
    }
    else{
      this.view=true;
      this.grid="column";
    }
    this.activateRoute.queryParams.subscribe(params => {
      // debugger;
      let page= params['page'] || '';
      this.router.navigate(['fundoo/notes'], { queryParams: { page: page, view: this.grid } });
    });
    console.log(this.view);
  }


  OpenSignout(userValues)
  {
    const dialogRef = this.dialog.open(SignoutComponent, {
      data: { userValues: userValues },
      panelClass: 'custom-dialog-container'
    });
    dialogRef.afterClosed().subscribe(result => {
      userValues = result;
    });
  }

  userDatas()
  {
    this.serviceobj.userValues().subscribe( Response => this.userValues=Response.data);
  }
}
