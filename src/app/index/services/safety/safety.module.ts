import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafetyComponent } from './safety.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: SafetyComponent }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SafetyComponent]
})
export class SafetyModule { }
