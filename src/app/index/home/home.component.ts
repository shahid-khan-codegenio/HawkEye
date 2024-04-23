import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  services: any = []
  workWithUs: any = []
  constructor() { }

  ngOnInit() {
    this.services = [
      { count: '01', imgSrc: "./assets/services/s1.webp", innerText: '<span class="text">Truck <br> dispatching</span>' },
      { count: '02', imgSrc: "./assets/services/s2.webp", innerText: '<span class="text">Billing</span>' },
      { count: '03', imgSrc: "./assets/services/s3.webp", innerText: '<span class="text">Document Management <br/> & Paperwork</span>' },
      { count: '04', imgSrc: "./assets/services/s4.webp", innerText: '<span class="text">Factoring service</span>' },
      { count: '05', imgSrc: "./assets/services/s5.webp", innerText: '<span class="text">Rate Negotiation</span>' },
      { count: '06', imgSrc: "./assets/services/s6.webp", innerText: '<span class="text">SAFTY / DOT compliance</span>' },
      { count: '07', imgSrc: "./assets/services/s7.webp", innerText: '<span class="text">IFTA</span>' },
      { count: '08', imgSrc: "./assets/services/s8.webp", innerText: '<span class="text">Company Formation</span>' }
    ]

    this.workWithUs = [
      { imgSrc: "./assets/work-with-us/img1.webp", text: "Dry Van" },
      { imgSrc: "./assets/work-with-us/img2.jpg", text: "Step Deck" },
      { imgSrc: "./assets/work-with-us/img3jpg", text: "Reefer" },
      { imgSrc: "./assets/work-with-us/img4.jpg", text: "Flatbed" },
      { imgSrc: "./assets/work-with-us/img5.jpg", text: "Power Only" },
      { imgSrc: "./assets/work-with-us/img6.jpg", text: "Hotshot" },
      { imgSrc: "./assets/work-with-us/img7.jpg", text: "Boxtruck" },
      { imgSrc: "./assets/work-with-us/img8.webp", text: "Straight truck" },
    ]
  }

}
