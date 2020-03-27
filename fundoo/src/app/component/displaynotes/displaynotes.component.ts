import { Component, OnInit } from '@angular/core';
import { NoteservicesService } from 'src/app/services/noteservices.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-displaynotes',
  templateUrl: './displaynotes.component.html',
  styleUrls: ['./displaynotes.component.scss']
})
export class DisplaynotesComponent implements OnInit {

  constructor(private noteservice: NoteservicesService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
  }


  notes = [
    [
      { color: "rgb(255, 179, 255)", name: "pink" ,title: "firoz", description: "from karlapalem",isarchived:"1",istrash:"0"},
      { color: "rgb(255, 255, 128)", name: "darkGolden",title: "ershad", description: "from karlapalem" ,isarchived:"1",istrash:"0"},
      { color: "rgb(200, 232, 104)", name: "yellow" ,title: "shamsheer", description: "from karlapalem",isarchived:"0",istrash:"1"},
      { color: " rgb(158, 136, 191)", name: "darkYellow" ,title: "mallika", description: "from karlapalem",isarchived:"0",istrash:"1"},
      { color: "slategray", name: "grey" ,title: "karim", description: "from karlapalem",isarchived:"1",istrash:"0",},
      { color: "rgb(153, 221, 255)", name: "Teal" ,title: "sharmila", description: "from karlapalem",isarchived:"0",istrash:"1"},
      { color: "rgb(203,240,248)", name: "blue" ,title: "budi", description: "from karlapalem",isarchived:"1",istrash:"0"},
      { color: "rgb(174,203,250)", name: "Dark blue" ,title: "shabbir", description: "from karlapalem",isarchived:"1",istrash:"0"},
    ]
  ]

  arrayofColors = [
    [
      {color : "rgb(255,255,255)", name : "white"},
      {color : "rgb(255,0,0)", name : "red"},
      {color : "rgb(255,165,0)", name : "orange"},
      {color : "rgb(255,255,0)", name : "yellow"}
    ],
    [
      {color : "rgb(0,128,0)", name : "green"},
      {color : "rgb(0,128,128)", name : "teal"},
      {color : "rgb(0,0,255)", name : "blue"},
      {color : "rgb(0,0,139)", name : "dark blue"}
    ],
    [
      {color : "rgb(128,0,128)", name : "purple"},
      {color : "rgb(255,192,203)", name : "pink"},
      {color : "rgb(165,42,42)", name : "brown"},
      {color : "rgb(128,128,128)", name : "gray"}
    ]
  ]

}
