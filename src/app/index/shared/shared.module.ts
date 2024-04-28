import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { GetStartComponent } from './get-start/get-start.component';



@NgModule({
  declarations: [FormComponent,GetStartComponent],
  imports: [
    CommonModule
  ],
  exports: [FormComponent,GetStartComponent],

})
export class SharedModule { }
