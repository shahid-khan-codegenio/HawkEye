import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/helper/data.service';

@Component({
  selector: 'app-subscribers',
  templateUrl: './subscribers.component.html',
  styleUrls: ['./subscribers.component.scss']
})
export class SubscribersComponent implements OnInit {
  subscribers: any = [];
  loader = false;

  constructor(private api: DataService) { }

  ngOnInit() {
    this.getSubscriber()
  }

  getSubscriber(){
    this.loader = true;
    this.api.getSubscribers().subscribe((res:any)=>{
      if(res.success){
        this.subscribers = res.data;
        this.loader = false;
      }
    })
  }
}
