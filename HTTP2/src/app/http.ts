import { Injectable ,inject} from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class Http {
  readonly #http = inject(HttpClient);

  //post ekstra body ister
  get<T>(endpoint: string, callback: (res:T)=> void, errorCallback?:(err:HttpErrorResponse)=> void){
    this.#http.get<T>(endpoint).subscribe({
      next: (res)=>{
        callback(res);
      },
      error: (err:HttpErrorResponse)=>{
        console.log(err);
        if(errorCallback){
          errorCallback(err);
        }

      }
    });
  }


}
