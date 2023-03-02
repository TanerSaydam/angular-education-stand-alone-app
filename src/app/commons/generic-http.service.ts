import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GenericHttpService {

  apiUrl: string = "https://jsonplaceholder.typicode.com/";
  refreshTokenApiUrl: string = "Auth/GetTokenByRefreshToken";
  token: string = "";
  isLoading: boolean = false;  
  constructor(
    private _http: HttpClient,    
    private _router: Router,        
  ) { }

  get<T>(api: string, callBack: (res: T) => void, authorize: boolean = true, diffApi: boolean = false) {        
    this._http.get<T>(`${this.setApi(diffApi, api)}`, this.setOptions(authorize)).subscribe({
      next: (res) => {        
        callBack(res)
      },
      error: (err: HttpErrorResponse) => {        
          console.log(err)
      }
    });
  }

  post<T>(api: string, model: any, callBack: (res: T) => void, authorize: boolean = true, diffApi: boolean = false) {        
    this._http.post<T>(`${this.setApi(diffApi, api)}`, model, this.setOptions(authorize)).subscribe({
      next: (res) => {        
        callBack(res)
      },
      error: (err: HttpErrorResponse) => {        
        console.log(err)
    }
    });
  }  

  setApi(diffApi: boolean, api: string) {
    if (diffApi)
      return api;
    return this.apiUrl + api;
  }

  setOptions(authorize: boolean) {
    if (authorize)
      return { headers: { "Authorization": `Bearer ${this.token}` } }
    return {}
  }
 
}
