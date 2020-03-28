import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  allnotes() {
    this.noteservice.getnotes().subscribe(response => {
    this.allNotes = response.token;
    })
  }

 
  arrayOfColors = [
      { color: "rgb(255, 179, 255)", name: "pink" ,title: "firoz", description: "from karlapalem",isarchived:"true",istrash:"0"},
      { color: "rgb(255, 255, 128)", name: "darkGolden",title: "ershad", description: "from karlapalem" ,isarchived:"true",istrash:"0"},
      { color: "rgb(200, 232, 104)", name: "yellow" ,title: "shamsheer", description: "from karlapalem",isarchived:"false",istrash:"1"},
      { color: " rgb(158, 136, 191)", name: "darkYellow" ,title: "mallika", description: "from karlapalem",isarchived:"false",istrash:"1"},
      { color: "slategray", name: "grey" ,title: "karim", description: "from karlapalem",isarchived:"true",istrash:"0",},
      { color: "rgb(153, 221, 255)", name: "Teal" ,title: "sharmila", description: "from karlapalem",isarchived:"false",istrash:"1"},
      { color: "rgb(203,240,248)", name: "blue" ,title: "budi", description: "from karlapalem",isarchived:"true",istrash:"0"},
      { color: "rgb(174,203,250)", name: "Dark blue" ,title: "shabbir", description: "from karlapalem",isarchived:"false",istrash:"0"},
  ]

}
