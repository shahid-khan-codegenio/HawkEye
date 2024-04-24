import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruckDocumentComponent } from './truck-document.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: TruckDocumentComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TruckDocumentComponent]
})
export class TruckDocumentModule { }
