import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

export class UserModel{
  name:string = "";
  age:number = 0;
  email: string = "";
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  template: `
  <input [(ngModel)]="name"/>
  <p>{{name()}}</p>
  `,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Signals');

  //generic zorunlu değil ama iyi olur
  name= signal<string>("default değer buraya geldi");
  readonly user = signal<UserModel>(new UserModel);
  readonly users = signal<UserModel[]>([new UserModel])

  constructor(){
    // this.name.set("yüksel");//değeri set eder
    // this.name.update(prev => prev+this.name)//değeri günceller

    // this.user.set(new UserModel);
    // this.user.set({name:"",age:10,email:""})
    // const uservariable = new UserModel();
    // uservariable.name = "";
    // uservariable.age=12;
    // uservariable.email="";
    // this.user.set(uservariable);

    // //bu hali normal
    // this.user.update(prev=>({...prev,}))
    // //bu hali age i override eder ve virgul koyarak sınıfta olmayan bir şey de kullanabiliyorsun
    // this.user.update(prev=>({...prev,age:15}))


    const users:UserModel[]=[];
    this.users.set(users);

    const userVariable = new UserModel();
    this.users.update(prev=>[...prev,userVariable])

  }
}
