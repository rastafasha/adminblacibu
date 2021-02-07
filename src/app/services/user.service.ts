import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import {Observable} from 'rxjs';
import {User, TipoRegistro} from '../models/users';
import { environment } from '../../environments/environment';
import { Params, Router } from '@angular/router';

import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class UserService{

  public serverUrl: string;
  public user: string;
  public identity;
  public token;
  private users: User[];
  private grupos: TipoRegistro[];

   constructor(
     // tslint:disable-next-line: variable-name
     public _http: HttpClient,
     public router: Router
   ){
      this.serverUrl = environment.baseUrl;
      this.users = [];
   }

   // tslint:disable-next-line: typedef
   test(){
     return 'Hola mundo desde un servicio';
   }

   register(user): Observable<any>{
    const json = JSON.stringify(user);
    const params = 'json=' + json;
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    //return this._http.post(this.serverUrl + 'user/register', params, {headers});

    return this._http.post(this.serverUrl +'user/register', params, {headers});

   }

   signup(user, gettoken = null): Observable<any>{
     if (gettoken != null){
           user.gettoken = 'true';
     }

     const json = JSON.stringify(user);
     const params = 'json=' + json;
     const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

     return this._http.post(this.serverUrl + 'user/login', params, {headers});
   }

   update(token, user): Observable<any>{
    // limpiar campo content  pasa htmlentity a utf8
    user.description = environment.htmlEntities(user.description);

    const json = JSON.stringify(user);
    const params = 'json=' + json;
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www.form-urlencoded').set('Authorization', token);

    return this._http.put(this.serverUrl + 'user/update', params, {headers});

   }

   // tslint:disable-next-line: typedef
   getIdentity(){
      const identity = JSON.parse(localStorage.getItem('identity'));
      // tslint:disable-next-line: triple-equals
      if (identity && identity != 'undefined'){
        this.identity = identity;
      }else{
        this.identity = null;
      }
      return this.identity;
   }

   // tslint:disable-next-line: typedef
   getToken(){
      const token = localStorage.getItem('token');

      // tslint:disable-next-line: triple-equals
      if (token && token != 'undefined'){
        this.token = token;
      }else{
        this.token = null;
      }
      return this.token;
   }


  getUser(id): Observable<any>{
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.get( this.serverUrl + 'user/detail/' + id, {headers});

  }

  getUserImage(filename: string): Observable<User> {
    const url = this.serverUrl + `user/avatar/${filename}`;
    return this._http.get<User>(url);
  }



  getUsers(): Observable<any> {
    return this._http.get<User>(this.serverUrl + 'user/').pipe(
      catchError(this.handleError)
    );
  }

  logout() {
    this.identity = null;
    this.token = '';

    localStorage.removeItem('token');
    localStorage.removeItem('identity');

    this.router.navigate(['../login']);

  }


private handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('An error occurred:', error.error.message);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong,
    console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
  }
  // return an observable with a user-facing error message
  return throwError('Something bad happened. Please try again later.');
}




}
