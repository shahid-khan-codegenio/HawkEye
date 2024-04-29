import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlatbedComponent } from './flatbed.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [
  { path: '', component: FlatbedComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule

  ],
  declarations: [FlatbedComponent]
})
export class FlatbedModule { }
