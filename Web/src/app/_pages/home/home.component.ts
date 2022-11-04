import { Component, OnInit } from '@angular/core';

export interface Tile {
  cols: number;
  rows: number;
  img: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  tiles: Tile[] = [
    {img: 'adr_18.jpeg', cols: 3, rows: 1},
    {img: 'adr_24.jpeg', cols: 1, rows: 2},
    {img: 'adr_10.jpeg', cols: 1, rows: 1},
    {img: 'adr_15.jpeg', cols: 2, rows: 1},
  ];

  constructor(
  ) {

  }

  ngOnInit(): void {

  }

}
