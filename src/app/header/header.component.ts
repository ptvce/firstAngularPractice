import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  display: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  displayTemp() {
    this.display = !this.display;
  }
}
