import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  appTitle: string = 'Student List';

  constructor() {}

  ngOnInit(): void {
    let mainFormCon: HTMLDivElement = document.querySelector('.add-main-con');
    mainFormCon.style.display = 'none';
  }

  toggleAddForm() {
    let mainFormCon: HTMLDivElement = document.querySelector('.add-main-con');
    mainFormCon.style.display = 'flex';
  }
}
