import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, signal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('HTTP');

  //böyle de olur aşağıdaki gibi de
  //# bu işaretin anlamı yok sadece görsel olarak html de kullanılmasın diye belirtiyorsun
  readonly #http = inject(HttpClient);

  //postun içindeki ile aynı
  todo: {title:string, userId:number} = {title:"", userId:0};

  //constructor(private http:HttpClient) { }
  todos:any = [];

   constructor() {this.get(); }

    options = {
      //postta body gönderebiliyoruz ama gette genelde header gönderiyoruz
      //potta bodyden sonra header gönderebiliyoruz
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "CompanyId": "12345",
        "Authorization":"Bearer asdasdasd"
    }),
    params: new HttpParams().set('userId','1').set("role","admin")
  }

  get(){
    //subscribe ile bağlanıyoruz
    this.#http.get<any[]>('https://jsonplaceholder.typicode.com/todos',this.options).subscribe({
      next:(res)=>{
        this.todos = res;
      },
      error:(err:HttpErrorResponse)=>{
        console.log(err);
      }
    })
  }

  post(){
    const body = {
      title:"",
      userId:0
    }
    this.#http.post<{message: string}>('https://jsonplaceholder.typicode.com/todos',this.todo,this.options).subscribe({
      next:(res)=>{
        console.log(res.message);
      },
      error:(err:HttpErrorResponse)=>{
        console.log(err);
      }
    })
  }

  //bu şekilde sadece başarılı hali yakalıyoruz
  getshort(){
    this.#http.get<any>("").subscribe(res=>{

    });
  }

}
