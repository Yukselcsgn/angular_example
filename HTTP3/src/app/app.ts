import { Component, inject ,signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template:`
  <h1>Interceptors</h1>

  `
})
export class App {
  readonly #http = inject(HttpClient);

  constructor(){
    this.get();
  }

  get(){
    this.#http.get('https://jsonplaceholder.typicode.com/todos/1').subscribe(
      res=> console.log(res));
  }
}
