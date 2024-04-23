import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HowToStartComponent } from './how-to-start.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', 
    component: HowToStartComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)

  ],
  declarations: [HowToStartComponent]
})
export class HowToStartModule { }
