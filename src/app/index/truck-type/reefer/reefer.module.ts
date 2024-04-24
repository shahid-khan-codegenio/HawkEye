import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReeferComponent } from './reefer.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: ReeferComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ReeferComponent]
})
export class ReeferModule { }
