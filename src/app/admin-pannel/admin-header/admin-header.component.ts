import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'admin-app-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent implements OnInit {
  darkMode = false;
  sidebar: any;
  home: any;
  body: any;
  sidebar_state: boolean = false;
  constructor() { }


  @HostListener("window:resize", ["$event"])
  onResize(event: Event): void {
    this.ngOnInit();
  }

  ngOnInit() {
    this.sidebar = document.querySelector('.sidebar');
    this.home = document.querySelector('.home');

    let windowWidth = window.innerWidth;
    if (windowWidth <= 768) {
      this.sidebar?.classList.add('close');
      this.home?.classList.add('close');
    }
    
  }

  toggleSidebar() {
    if (this.sidebar?.classList.contains('close')) {
      this.sidebar.classList.remove('close');
      this.sidebar_state = true;
      this.home?.classList.remove('close');
    } else {
      this.sidebar?.classList.add('close');
      this.home?.classList.add('close');
      this.sidebar_state = false;
    }
  }

  logout(){
    localStorage.removeItem('token');
  }

}
