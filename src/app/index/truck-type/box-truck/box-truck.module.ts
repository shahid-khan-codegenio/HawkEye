import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxTruckComponent } from './box-truck.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: BoxTruckComponent }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BoxTruckComponent]
})
export class BoxTruckModule { }
