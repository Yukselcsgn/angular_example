import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ReactiveFormsModule],
  template:`

  <form [formGroup]="group"  autocomplete="off" (ngSubmit)="save()">
    <div>
      Title
      <input formControlName="title" name="title"/>
    </div>
    <div>
      Completed
      <input type="checkbox" formControlName="completed" name="completed"/>
    </div>
    <div>
      <button type="submit">Save</button>
    </div>
  </form>


  `
})
export class App {
  protected readonly title = signal('ReactiveForm');

  //bu şekilde de daha parçalı ve düzenli yapılabilir aynı yapı aslında zaten
  // controlls ={
  //   title: new FormControl("",[Validators.required, Validators.minLength(3)]),
  //   completed: new FormControl(false)
  // }

  // group new FormGroup(this.controlls)


  group = new FormGroup({

    //validators. ile aslında kuralları veriyoruz
    title: new FormControl("",[Validators.required, Validators.minLength(3)]),
    completed: new FormControl(false)
  });

  constructor(){
    //bu şekilde iki değeri de set edebiliyoruz 
    this.group.setValue({title:"Default",completed:false});
    //bu şekilde sadece title değerşnş set ediyoruz
    this.group.controls["title"].setValue("değer 2");
  }

  save(){
    console.log(this.group.valid);
    console.log(this.group.value);

    // bu da orijinal değerleri çeker
    //this.group.reset();
  }
}
