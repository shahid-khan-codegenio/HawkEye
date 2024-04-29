import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from './contact-us.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  { path: '', component: ContactUsComponent }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule

  ],
  declarations: [ContactUsComponent]
})
export class ContactUsModule { }
