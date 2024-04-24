import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruckDispatchingComponent } from './truck-dispatching.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: TruckDispatchingComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)

  ],
  declarations: [TruckDispatchingComponent]
})
export class TruckDispatchingModule { }
