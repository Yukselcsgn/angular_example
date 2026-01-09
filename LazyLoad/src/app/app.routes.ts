import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:"home",
    //c dosyanın içeriğini temsil
    loadComponent:()=> import("./home/home").then(c=>c.Home)
  },
  {
    path:"product",
    loadComponent:()=> import("./product/product").then(c=>c.Product)
  },
  {
    path:"category",
    loadComponent:()=> import("./category/category").then(c=>c.Category)
  }

];
