import { Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule],
  template:`
  <form #saveForm="ngForm" (ngSubmit)="save(saveForm)">
    <div>
      Title
      <input [(ngModel)]="todo.title" name="title" required minlength="3"/>
    </div>
    <div>
      Completed
      <input type="checkbox" [(ngModel)]="todo.completed" name="completed"/>
    </div>
    <div>
      <button type ="submit">Save</button>
    </div>
  </form>


  `,
})
export class App {
  //protected readonly title = signal('Form');

  todo:{title:string,completed:boolean}={title:"",completed:false}

  save(form:NgForm){
    if(!form.valid){
      alert("Not valid");
    }

    console.log(form.value);
    console.log(this.todo);

  }
}
