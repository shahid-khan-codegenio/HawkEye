import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-pannel',
  template: `
  <section class="main">
    <app-sidebar></app-sidebar>
    
    <section class="home">
      <admin-app-header></admin-app-header>
      <div class="content">
        <router-outlet></router-outlet>
      </div>
    </section>
  </section>
  `,
  styles: [`
    .main {
        min-height: 100vh;
        background-color: #E4E9F7;
    
        .home {
            position: relative;
            min-height: 100vh;
            left: 260px;
            width: calc(100% - 260px);
            transition: all 0.3s ease;
            
            .content{
              padding: 1rem 2rem;
            }
        }
    
        .home.close {
            left: 0 !important;
            width: 100% !important;
        }
    }
  `]
})
export class AdminPannelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
