import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/helper/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  counts: any;
  loader = true;

  constructor(private api: DataService) {
  }

  ngOnInit() {
    this.getCount()
  }

  getCount(){
    this.loader = true;
    this.api.getCount().subscribe((res: any) => {
      if(res.success){
        this.loader = false;
        this.counts = res.data;
      }
    })
  }

}
