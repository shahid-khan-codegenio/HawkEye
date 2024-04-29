import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxTruckComponent } from './box-truck.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [
  { path: '', component: BoxTruckComponent }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [BoxTruckComponent]
})
export class BoxTruckModule { }
