import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QueriesComponent } from './queries.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminSharedModule } from '../amin-shared/shared.module';

const routes: Routes = [
  { path: '', component: QueriesComponent }
]
@NgModule({
  imports: [
    CommonModule,
    AdminSharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [QueriesComponent]
})
export class QueriesModule { }
