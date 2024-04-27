import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RateNegotiationComponent } from './rate-negotiation.component';

const routes: Routes = [
  { path: '', component: RateNegotiationComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RateNegotiationComponent]
})
export class RateNegotiationModule { }
