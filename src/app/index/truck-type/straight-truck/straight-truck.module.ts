import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StraightTruckComponent } from './straight-truck.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [
  { path: '', component: StraightTruckComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule

  ],
  declarations: [StraightTruckComponent]
})
export class StraightTruckModule { }
