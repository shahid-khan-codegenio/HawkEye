import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PowerOnlyComponent } from './power-only.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [
  { path: '', component: PowerOnlyComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule

  ],
  declarations: [PowerOnlyComponent]
})
export class PowerOnlyModule { }
