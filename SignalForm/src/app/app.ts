import { Component, signal } from '@angular/core';
import { email, Field, form, required } from '@angular/forms/signals';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Field],
  template:`

    <h1>Signal Forms</h1>
      <div>
        <label>Email</label>
        <input [field]="loginForm.email">
      </div>
      <div>
        <label>Password</label>
        <input name="password">
      </div>
      <div>
        <button (click)="signIn" >login</button>
      </div>
  

  `
})
export class App {
  protected readonly title = signal('SignalForm');

  readonly login = signal({
    email:'',
    password:''
  });

  readonly loginForm = form(this.login,(scheme)=>{
    required(scheme.email, {message: "you must enter email address"});
    email(scheme.email, {message: "enter valid email address"});
    required(scheme.password);

  })

  signIn(){
    console.log(this.loginForm().errors);
  }

}
