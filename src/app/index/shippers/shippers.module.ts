import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShippersComponent } from './shippers.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '', 
    component: ShippersComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [ShippersComponent]
})
export class ShippersModule { }
