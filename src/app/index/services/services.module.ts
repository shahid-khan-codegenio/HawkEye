import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './services.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ServicesComponent,
    children: [
      { path: 'truck-dispatching', loadChildren: () => import('./truck-dispatching/truck-dispatching.module').then(m => m.TruckDispatchingModule) },
      { path: 'billing', loadChildren: () => import('./billing/billing.module').then(m => m.BillingModule) },
      { path: 'document-management', loadChildren: () => import('./document-management/document-management.module').then(m => m.DocumentManagementModule) },
      { path: 'factoring-services', loadChildren: () => import('./factoring-service/factoring-service.module').then(m => m.FactoringServiceModule) },
      { path: 'rate-negotiation', loadChildren: () => import('./rate-negotiation/rate-negotiation.module').then(m => m.RateNegotiationModule) },
      { path: 'safety', loadChildren: () => import('./safety/safety.module').then(m => m.SafetyModule) },
      { path: 'trucker-accounting', loadChildren: () => import('./trucker-accounting/trucker-accounting.module').then(m => m.TruckerAccountingModule) },
      { path: 'trucking-invoice', loadChildren: () => import('./trucking-invoice/trucking-invoice.module').then(m => m.TruckingInvoiceModule) },
      { path: 'truck-document', loadChildren: () => import('./truck-document/truck-document.module').then(m => m.TruckDocumentModule) },
      { path: 'truck-dispatch', loadChildren: () => import('./truck-dispatch/truck-dispatch.module').then(m => m.TruckDispatchModule) },
    ]
  }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ServicesComponent]
})
export class ServicesModule { }
