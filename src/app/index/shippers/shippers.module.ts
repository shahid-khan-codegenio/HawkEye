import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShippersComponent } from './shippers.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', 
    component: ShippersComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)

  ],
  declarations: [ShippersComponent]
})
export class ShippersModule { }
