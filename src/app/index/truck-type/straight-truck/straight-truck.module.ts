import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StraightTruckComponent } from './straight-truck.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: StraightTruckComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [StraightTruckComponent]
})
export class StraightTruckModule { }
