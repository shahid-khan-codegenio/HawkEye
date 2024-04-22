import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index.component';
import { LayoutModule } from './layout/layout.module';
import { IndexRouting } from './index.routing';

@NgModule({
  imports: [
    CommonModule,
    IndexRouting,
    LayoutModule
  ],
  declarations: [IndexComponent]
})
export class IndexModule { }
