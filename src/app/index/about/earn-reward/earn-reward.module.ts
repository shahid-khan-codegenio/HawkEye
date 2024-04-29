import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EarnRewardComponent } from './earn-reward.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: EarnRewardComponent
  }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule

  ],
  declarations: [EarnRewardComponent]
})
export class EarnRewardModule { }
