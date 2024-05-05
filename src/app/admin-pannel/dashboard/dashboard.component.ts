import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/helper/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  counts: any

  constructor(private api: DataService) {
  }

  ngOnInit() {
    this.getCount()
  }

  getCount(){
    this.api.getCount().subscribe((res: any) => {
      if(res.success){
        this.counts = res.data;
      }
    })
  }

}
