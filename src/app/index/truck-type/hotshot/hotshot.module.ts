import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotshotComponent } from './hotshot.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: HotshotComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HotshotComponent]
})
export class HotshotModule { }
