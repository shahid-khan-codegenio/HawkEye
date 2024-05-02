import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscribersComponent } from './subscribers.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: SubscribersComponent }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SubscribersComponent]
})
export class SubscribersModule { }
