import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index.component';
import { LayoutModule } from './layout/layout.module';
import { IndexRouting } from './index.routing';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    IndexRouting,
    LayoutModule,
    SharedModule
  ],
  declarations: [IndexComponent]
})
export class IndexModule { }
