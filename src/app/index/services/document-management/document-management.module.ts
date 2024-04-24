import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentManagementComponent } from './document-management.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: DocumentManagementComponent }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)

  ],
  declarations: [DocumentManagementComponent]
})
export class DocumentManagementModule { }
