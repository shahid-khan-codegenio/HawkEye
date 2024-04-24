import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RabeNegotiationComponent } from './rabe-negotiation.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: RabeNegotiationComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RabeNegotiationComponent]
})
export class RabeNegotiationModule { }
