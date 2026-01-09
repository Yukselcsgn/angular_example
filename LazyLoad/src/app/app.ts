import { Category } from './category/category';
import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  template:`

  <div style="display: flex; gap:10px">
    <a routerLink="home">Home</a>
    <a routerLink="product">Product</a>
    <a routerLink="category">Category</a>
  </div>


  <router-outlet/>
  `
})
export class App {
  protected readonly title = signal('LazyLoad');
}
