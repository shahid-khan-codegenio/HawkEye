import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruckTypeComponent } from './truck-type.component';
import { TruckTypeRouting } from './truck-type.routing';


@NgModule({
  imports: [
    CommonModule,
    TruckTypeRouting
  ],
  declarations: [TruckTypeComponent]
})
export class TruckTypeModule { }
