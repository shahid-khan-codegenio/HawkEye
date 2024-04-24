import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruckingInvoiceComponent } from './trucking-invoice.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: TruckingInvoiceComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TruckingInvoiceComponent]
})
export class TruckingInvoiceModule { }
