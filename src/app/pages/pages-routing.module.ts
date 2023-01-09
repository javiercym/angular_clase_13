import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { Ejercicio1Component } from './ejercicio1/ejercicio1.component';
import { Ejercicio2Component } from './ejercicio2/ejercicio2.component';

const routes: Routes = [
  
  {path:'ejercicio',component: PagesComponent,
    children:[
      {path:'ejercicio1',component:Ejercicio1Component},
      {path:'ejercicio2',component:Ejercicio2Component},
    ]
  },
  {
    path:'**',redirectTo:'ejercicio/ejercicio1'
  }
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class PagesRoutingModule { }
