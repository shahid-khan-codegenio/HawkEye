import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuccessStoriesComponent } from './success-stories.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', 
    component: SuccessStoriesComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SuccessStoriesComponent]
})
export class SuccessStoriesModule { }
