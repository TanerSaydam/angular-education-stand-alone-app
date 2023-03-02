import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ValidInputDirective } from '../valid-input.directive';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ValidInputDirective
  ],
  exports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ValidInputDirective
  ]
})
export class CommonsModule { }
