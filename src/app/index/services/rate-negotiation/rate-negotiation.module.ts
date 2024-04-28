import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RateNegotiationComponent } from './rate-negotiation.component';
import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [
  { path: '', component: RateNegotiationComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [RateNegotiationComponent]
})
export class RateNegotiationModule { }
