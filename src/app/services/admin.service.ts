import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Admin, TipoRegistro} from '../models/admin';
import { environment } from '../../environments/environment';
import { Params, Router } from '@angular/router';

import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class AdminService{

  public serverUrl: string;
  public user: string;
  public identity;
  public token;
  private admins: Admin[];
  private grupos: TipoRegistro[];

   constructor(
     // tslint:disable-next-line: variable-name
     public _http: HttpClient,
     public router: Router
   ){
      this.serverUrl = environment.baseUrl;
   }

   // tslint:disable-next-line: typedef
   test(){
     return 'Hola mundo desde un servicio';
   }

   register(admin): Observable<any>{
    const json = JSON.stringify(admin);
    const params = 'json=' + json;
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    //return this._http.post(this.serverUrl + 'user/register', params, {headers});

    return this._http.post( this.serverUrl + 'admin/register', params, {headers});

   }

   signup(admin, gettoken = null): Observable<any>{
     if (gettoken != null){
      admin.gettoken = 'true';
     }

     const json = JSON.stringify(admin);
     const params = 'json=' + json;
     const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

     return this._http.post(this.serverUrl + 'admin/login', params, {headers});
   }

   updateAdmines(admin): Observable<any>{
    // limpiar campo content  pasa htmlentity a utf8
    //admin.direccion = environment.htmlEntities(admin.direccion);

    const json = JSON.stringify(admin);
    const params = 'json=' + json;
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www.form-urlencoded');

    return this._http.put(this.serverUrl + 'admin/update', params, {headers});

   }
   update(token, admin): Observable<any>{
    // limpiar campo content  pasa htmlentity a utf8
    //admin.direccion = environment.htmlEntities(admin.direccion);

    const json = JSON.stringify(admin);
    const params = 'json=' + json;
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www.form-urlencoded').set('Authorization', token);

    return this._http.put(this.serverUrl + 'admin/update', params, {headers});

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


  getAdmin(id): Observable<any>{
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.get( this.serverUrl + 'admin/detail/' + id, {headers});

  }

  getAdministrador(id: number):Observable<any> {
    return this._http.get<Admin>(this.serverUrl + 'admin/detail/' + id).pipe(
      catchError(this.handleError)
    );
  }

  getAdminImage(filename: string): Observable<Admin> {
    const url = this.serverUrl + `admin/avatar/${filename}`;
    return this._http.get<Admin>(url);
  }



  getAdminUsers(): Observable<any> {
    return this._http.get<Admin>(this.serverUrl + 'admin/users').pipe(
      catchError(this.handleError)
    );
  }

  getAdminAdmins(): Observable<any> {
    return this._http.get<Admin>(this.serverUrl + 'admin/admines').pipe(
      catchError(this.handleError)
    );
  }

  getAdminUserDetail(id): Observable<any>{
    return this._http.get<Admin>(this.serverUrl + 'admin/user/' + id).pipe(
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



  updateAdministrador( admin, id): Observable<any> {
      return this._http.put(this.serverUrl + 'admin/update/' + id, admin);
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
