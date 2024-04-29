import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruckDocumentComponent } from './truck-document.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [
  { path: '', component: TruckDocumentComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [TruckDocumentComponent]
})
export class TruckDocumentModule { }
