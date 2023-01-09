import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ejercicio1Component } from './ejercicio1/ejercicio1.component';
import { Ejercicio2Component } from './ejercicio2/ejercicio2.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    Ejercicio1Component,
    Ejercicio2Component,
    PagesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FormsModule
  ],
  exports  : [
    Ejercicio1Component,
    Ejercicio2Component,
    PagesComponent
  ]
})
export class PagesModule { }
