import { Component, signal } from '@angular/core';
import { RouterOutlet, inject} from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template:`
    <h1>API REQUESTS</h1>

  `
})
export class App {
  //protected readonly title = signal('HTTP2');

  loading = false

  readonly #http = inject(HttpClient);

  get(){
    this.loading = true;
    this.#http().get<string>("endpoint", ()=>{

    }); 
  }

  get2(){
    this.loading = true;
    this.#http().get<string>("endpoint", ()=>{

    }, ()=>{
      this.loading = false;
    }); 
  }
}
