import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';


@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet> `,
})
export class AppComponent implements OnInit {
  title = 'HawkEye';
  ngOnInit(): void {
    AOS.init({
      offset: 50,
      duration: 700,
      easing: 'ease-in-sine',
      delay: 100,
      once: true
    });
  }

}
