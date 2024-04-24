import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlatbedComponent } from './flatbed.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: FlatbedComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FlatbedComponent]
})
export class FlatbedModule { }
