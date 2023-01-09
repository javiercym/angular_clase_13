import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
  export class navbarService {
    menu:any[]=[{
      titulo:'Ejercicio 1',
      url:'/ejercicio/ejercicio1'
    },
    {
      titulo:'Ejercicio 2',
      url:'/ejercicio/ejercicio2'
    }
  ]
} 