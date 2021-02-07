import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Params } from '@angular/router';
import {Miembro} from '../models/miembro';
import { environment } from '../../environments/environment';

@Injectable()
export class MiembroService{

  public serverUrl: string;
  public miembro: Miembro;
  public identity;
  public token;

   constructor(
     // tslint:disable-next-line: variable-name
     private _http: HttpClient
   ){
      this.serverUrl = environment.baseUrl;
    }

    create(token, miembro): Observable<any>{
      // limpiar campo content  pasa htmlentity a utf8
      miembro.content = environment.htmlEntities(miembro.content);

      const json = JSON.stringify(miembro);
      const params = 'json=' + json;

      const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded').set('Authorization', token);

      return this._http.put(this.serverUrl + 'miembro/', params, {headers});
    }

    getMiembros(): Observable<any>{
      const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
      return this._http.get(this.serverUrl + 'miembro', {headers});

    }

    getMiembro(id): Observable<any>{
      const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
      return this._http.get(this.serverUrl + 'miembro/user/' + id, {headers});

    }

    update(token, miembro, id): Observable<any>{
      // limpiar campo content  pasa htmlentity a utf8
      miembro.content = environment.htmlEntities(miembro.content);

      const json = JSON.stringify(miembro);
      const params = 'json=' + json;

      const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded').set('Authorization', token);

      return this._http.put(this.serverUrl + 'miembro/upload/' + id, params, {headers});
    }

    // tslint:disable-next-line: typedef
    delete(token, id){
      const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded').set('Authorization', token);

      return this._http.delete(this.serverUrl + 'miembro/delete/' + id, {headers});
    }


  }
