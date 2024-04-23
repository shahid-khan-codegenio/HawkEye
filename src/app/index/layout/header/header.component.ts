import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navbarOpen: boolean = false;
  @ViewChild('toggleNotification') toggleButton!: ElementRef;
  @ViewChild('notificationMenu') menu!: ElementRef;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.listen('window', 'click', (e: Event) => {
      if (!this.menu?.nativeElement.contains(e.target) && !this.toggleButton?.nativeElement.contains(e.target)) {
        this.navbarOpen = false;
      }
    });
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen
  }

}
