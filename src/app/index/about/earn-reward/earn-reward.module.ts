import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EarnRewardComponent } from './earn-reward.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', 
    component: EarnRewardComponent
  }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)

  ],
  declarations: [EarnRewardComponent]
})
export class EarnRewardModule { }
