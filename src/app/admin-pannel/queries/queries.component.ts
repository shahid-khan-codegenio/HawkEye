import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/helper/data.service';
import { LoaderOptionsObject } from '../amin-shared/loader.interface';

@Component({
  selector: 'app-queries',
  templateUrl: './queries.component.html',
  styleUrls: ['./queries.component.scss']
})
export class QueriesComponent implements OnInit {
  loaderOptions: LoaderOptionsObject = {
    rows: 5,
    cols: 5,
    colSpans: {
      0: 1
    }
  }
  dataFetching = true;
  queries: any = [];
  loader = false;

  constructor(private api: DataService) { }

  ngOnInit() {
    this.getSubscriber()
  }

  getSubscriber(){
    this.loader = true;
    this.api.getContactUs().subscribe((res:any)=>{
      if(res.success){
        this.queries = res.data;
        this.loader = false;
      }
    })
  }
}
