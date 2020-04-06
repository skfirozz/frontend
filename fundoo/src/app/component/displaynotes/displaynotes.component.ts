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
  color: Note = new Note();
  param:any;
//  @Input() note:Note= new Note();
  constructor(private noteservice: NoteservicesService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.pinNotes();
    this.nonPinNotes();
    this.route.queryParams.subscribe( params =>{
      this.param=params['page']|| '';
      console.log(this.param);
    });
  }
  ngOnChanges() {
    console.log('ji');
    window.location.reload();
  }


  pinNotes() {
    this.noteservice.getPinNotes().subscribe(response => {
      this.pinnedNotes = response.data;
      console.log(response.data);
    })
  }

  nonPinNotes()
  {
    this.noteservice.getUnPinNotes().subscribe(response => {
      this.unpinnedNotes = response.data;
      console.log(response.data);
    })
  }

  //working
  pin(noteId: number, notes) {
    this.color.id = noteId;
    if (notes.ispinned == true) {
      this.color.ispinned = false;
      this.noteservice.updatePin(this.color).subscribe(response => {
        console.log(response.message);
      })
    }
    else {
      this.color.ispinned = true;
      this.noteservice.updatePin(this.color).subscribe(response => {
        console.log(response.message);
      })
    }
    window.location.reload();
  }
}
