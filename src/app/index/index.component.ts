import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  template: `
  <app-header></app-header>
  <router-outlet></router-outlet>
  <app-footer></app-footer>
  `,
})
export class IndexComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
