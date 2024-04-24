import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DryVanComponent } from './dry-van.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: DryVanComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DryVanComponent]
})
export class DryVanModule { }
