import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path:"",
    loadComponent:() => import("./pages/layout/layout"),
    children:[
      {
        path:"",
        loadComponent:()=>import("./pages/home/home")
      },
      {
        path:"products",
        loadComponent:()=>import("./pages/product/product")
      },
      {
        path:"products/create",
        loadComponent:()=>import("./pages/product/create-product/create-product")

      }
    ]
  }
];
