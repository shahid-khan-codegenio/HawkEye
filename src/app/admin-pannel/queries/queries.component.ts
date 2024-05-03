import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/helper/data.service';

@Component({
  selector: 'app-queries',
  templateUrl: './queries.component.html',
  styleUrls: ['./queries.component.scss']
})
export class QueriesComponent implements OnInit {

  queries: any = [];
  loader = false;

  constructor(private api: DataService) { }

  ngOnInit() {
    this.getSubscriber()
  }

  getSubscriber(){
    this.loader = true;
    this.api.getQueries().subscribe((res:any)=>{
      if(res.success){
        this.queries = res.data;
        this.loader = false;
      }
    })
  }
}
