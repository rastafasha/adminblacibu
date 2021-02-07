import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Params } from '@angular/router';
import {UserPost} from '../models/userpost';
import { environment } from '../../environments/environment';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class UserPostService{

  public serverUrl: string;
  public user: string;
  public identity;
  public token;
  totalRegistros: number = 0;

   constructor(
     // tslint:disable-next-line: variable-name
     private _http: HttpClient
   ){
      this.serverUrl = environment.baseUrl;
    }

    create(token, userpost): Observable<any>{
      // limpiar campo content  pasa htmlentity a utf8
      //userpost.content = environment.htmlEntities(userpost.content);

      const json = JSON.stringify(userpost);
      const params = 'json=' + json;

      const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded').set('Authorization', token);

      return this._http.put(this.serverUrl + 'userpost/', params, {headers});
    }

    getPosts(): Observable<any>{
      const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
      return this._http.get(this.serverUrl + 'userpost', {headers});

    }

    getPost(id): Observable<any>{
      const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
      return this._http.get(this.serverUrl + 'userpost/show/' + id, {headers});

    }

    getUserTipoRegistro(id): Observable<any>{
      const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
      return this._http.get(this.serverUrl + 'userpost/tiporegistro/users/' + id, {headers});

    }

    update(token, userpost, id): Observable<any>{
      // limpiar campo content  pasa htmlentity a utf8
      //post.content = environment.htmlEntities(post.content);
      const json = JSON.stringify(userpost);
      const params = 'json=' + json;

      const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded').set('Authorization', token);

      return this._http.put(this.serverUrl + 'userpost/upload/' + id, params, {headers});
    }

    // tslint:disable-next-line: typedef
    delete(token, id){
      const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded').set('Authorization', token);

      return this._http.delete(this.serverUrl + 'userpost/delete/' + id, {headers});
    }

    updateUserPost( userpost, id): Observable<any> {
      return this._http.put<any>(this.serverUrl + 'userpost/update/' + id, userpost);
    }

    /*updateUserPost(token, userpost, id): Observable<any>{

      const json = JSON.stringify(userpost);
      const params = 'json=' + json;

      const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded').set('Authorization', token);

      return this._http.put(this.serverUrl + 'userpost/update/' + id, params, {headers});
    }*/



    getUserpostTipoRegistro(id): Observable<any>{
      const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
      return this._http.get(this.serverUrl + 'userpost/tiporegistro/' + id);

    }

    deleteUserPost(id: number) {
      return this._http.delete( this.serverUrl + 'userpost/delete/' + id);
    }


  }
