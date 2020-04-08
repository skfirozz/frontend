import { Component, OnInit, Input } from '@angular/core';
import { NoteservicesService } from 'src/app/services/noteservices.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Note } from 'src/app/model/note.model';

@Component({
  selector: 'app-displaynotes',
  templateUrl: './displaynotes.component.html',
  styleUrls: ['./displaynotes.component.scss']
})
export class DisplaynotesComponent implements OnInit {

  unPinNotes: Note[];
  pinnedNotes: any;
  unpinnedNotes: any;
  archive: any;
  trash: any;
  color: Note = new Note();
  param: any;

  gridView:any;
  //  @Input() note:Note= new Note();
  constructor(private noteservice: NoteservicesService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.pinNotes();
    this.nonPinNotes();
    this.trashNotes();
    this.archiveNotes();
    this.route.queryParams.subscribe(params => {
      debugger;
      this.param = params['page'] || '';
      this.gridView=  params['view'];
      console.log(this.param);
    });
  }


  pinNotes() {
    this.noteservice.getPinNotes().subscribe(response => {
      this.pinnedNotes = response.data;
      console.log(response.data);
    })
  }

  archiveNotes() {
    this.noteservice.getArchiveNotes().subscribe(response => {
      this.archive = response.data;
    })
  }

  trashNotes() {
    this.noteservice.getTrashNotes().subscribe(response => {
      this.trash = response.data;
    })
  }
  nonPinNotes() {
    this.noteservice.getUnPinNotes().subscribe(response => {
      this.unpinnedNotes = response.data;
      console.log(response.data);
    })
  }

  getlabelNotes(){
    // this.noteservice.
  }

}
