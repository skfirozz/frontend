import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noteicons',
  templateUrl: './noteicons.component.html',
  styleUrls: ['./noteicons.component.scss']
})
export class NoteiconsComponent implements OnInit {

  constructor() { }



  ngOnInit(): void {
  }

  arrayOfColors = [
    [
      { color: "rgb(255, 179, 255)", name: "pink" },
      { color: "rgb(255, 255, 128)", name: "darkGolden" },
      { color: "rgb(200, 232, 104)", name: "yellow" },
      { color: " rgb(158, 136, 191)", name: "darkYellow" }
    ],
    [
      { color: "slategray", name: "grey" },
      { color: "rgb(153, 221, 255)", name: "Teal" },
      { color: "rgb(203,240,248)", name: "blue" },
      { color: "rgb(174,203,250)", name: "Dark blue" },
    ],
    [
      { color: "rgb(255, 153, 0)", name: "orange" },
      { color: "rgb(97, 191, 82)", name: "green" },
       { color: "white", name: "white" },
      { color: " rgb(196,174,251)", name: "purpule" }

    ]
  ]
}
