import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruckingInvoiceComponent } from './trucking-invoice.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [
  { path: '', component: TruckingInvoiceComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [TruckingInvoiceComponent]
})
export class TruckingInvoiceModule { }
