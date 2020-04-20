import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Note } from 'src/app/model/note.model';
import { NoteservicesService } from 'src/app/services/noteservices.service';

@Component({
  selector: 'app-pinned',
  templateUrl: './pinned.component.html',
  styleUrls: ['./pinned.component.scss']
})
export class PinnedComponent implements OnInit {

  @Input() notes:any;
  @Output() output:EventEmitter<any>= new EventEmitter();
  color:Note =new Note();
  constructor(private noteservice:NoteservicesService) { }

  ngOnInit(): void {
  }

  pin(noteId: number, notes) {
    // debugger;
    this.color.id = noteId;
    if(notes==0)
    this.color.ispinned=1;
    else this.color.ispinned=0;
    this.noteservice.updatePin(this.color).subscribe( Response => {
      console.log(Response.message)
      this.output.emit("ok");
    });
    
  }

}
