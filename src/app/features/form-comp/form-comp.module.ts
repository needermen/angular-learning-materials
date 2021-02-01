import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormCompComponent } from './form-comp.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [FormCompComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class FormCompModule { }
