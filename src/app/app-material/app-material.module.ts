import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatCardModule,
    MatTooltipModule,
    MatPaginatorModule,

  } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatCardModule,
    MatTooltipModule,
    MatPaginatorModule,
  ],
  exports: [
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatCardModule,
    MatTooltipModule,
    MatPaginatorModule,
  ],
  declarations: []
})
export class AppMaterialModule { }
