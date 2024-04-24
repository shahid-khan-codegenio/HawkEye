import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FactoringServiceComponent } from './factoring-service.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: FactoringServiceComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FactoringServiceComponent]
})
export class FactoringServiceModule { }
