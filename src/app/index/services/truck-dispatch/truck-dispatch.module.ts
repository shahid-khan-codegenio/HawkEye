import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruckDispatchComponent } from './truck-dispatch.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: TruckDispatchComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TruckDispatchComponent]
})
export class TruckDispatchModule { }
