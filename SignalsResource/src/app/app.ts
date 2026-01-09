import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, computed, inject, resource, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule],
  template:`
  <h1>APP COMPONENT</h1>
  <input [(ngModel)]="num1">
  <input [(ngModel)]="num2">
  @if(error()){
    {{error()}}
  }
  @if(loading()){
    <p>Loading...</p>
  }@else {
    <ul>
    @for(data of todos(); track data.id){
      <li>{{data.title}}</li>
    }
    </ul>
  }
  

  

  `,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('SignalsResource');

  readonly num1 = signal<number | undefined>(undefined);
  readonly num2 = signal<number | undefined>(undefined);

  readonly result = resource({
    params:()=>({num1 :this.num1(), num2:this.num2}),
    loader: async (params)=> {
      const res = await lastValueFrom(this.#http.get<any[]>("https://jsonplaceholder.typicode.com/todos/"+this.num1))
      //bu şekilde de olur üst satır yerine
      //const res = await fetch("https://jsonplaceholder.typicode.com/todos/").then(c=>c.json)
      await new Promise((resolve)=>setTimeout(resolve,2000))
      return res;
    }
  })

  //boş liste = undifined dönerse yap
  readonly todos = computed(()=>this.result.value()??[]);
  //readonly todos = signal<any[]>([]); -----> bu şekilde bağlı değil bu yöntemde

  readonly loading = computed(()=> this.result.isLoading());
  //bunu da daha güzel hale çevirdik
  //readonly loading = signal<boolean> (false);

  readonly error = computed(()=> {
    console.log(this.result.error()?.message);
    return this.result.error() ? "something went wrong" : undefined
  });

  readonly #http = inject(HttpClient);

  //bu eski hali daha çmce zaten http de yapmıştın bir de classa OnInit i implement etmek gerekiyor bunun için


  // ngOnInit():void{
  //   this.getTodos();
  // }

  // getTodos(){
  //   this.#http.get<any[]>("https://jsonplaceholder.typicode.com/todos/").subscribe({
  //     next:(res)=>{
  //       this.todos.set(res);
  //       this.loading.set(false);
  //     },
  //     error:(err:HttpErrorResponse)=>{
  //       console.log(err);
  //       this.loading.set(false);
  //     }
  //   })
  // }
}
