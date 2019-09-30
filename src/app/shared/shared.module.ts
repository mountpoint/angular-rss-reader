import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TrimPipe } from './pipes/trim.pipe';

@NgModule({
  declarations: [
    TrimPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    TrimPipe,
    FormsModule
  ]
})
export class SharedModule { }
