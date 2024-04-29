import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DryVanComponent } from './dry-van.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [
  { path: '', component: DryVanComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule

  ],
  declarations: [DryVanComponent]
})
export class DryVanModule { }
