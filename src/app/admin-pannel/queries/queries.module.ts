import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QueriesComponent } from './queries.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: QueriesComponent }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [QueriesComponent]
})
export class QueriesModule { }
