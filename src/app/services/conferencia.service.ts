import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Params } from '@angular/router';
import {Conferencia} from '../models/conferencia';
import { environment } from '../../environments/environment';

@Injectable()
export class ConferenciaService{

  public serverUrl: string;
  public conferencia: Conferencia;
  public identity;
  public token;

   constructor(
     // tslint:disable-next-line: variable-name
     private _http: HttpClient
   ){
      this.serverUrl = environment.baseUrl;
    }

    create(token, conferencia): Observable<any>{
      // limpiar campo content  pasa htmlentity a utf8
      conferencia.content = environment.htmlEntities(conferencia.content);

      const json = JSON.stringify(conferencia);
      const params = 'json=' + json;

      const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded').set('Authorization', token);

      return this._http.put(this.serverUrl + 'conferencia/', params, {headers});
    }

    getConferencias(): Observable<any>{
      const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
      return this._http.get(this.serverUrl + 'conferencia', {headers});

    }

    getConferencia(id): Observable<any>{
      const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
      return this._http.get(this.serverUrl + 'conferencia/user/' + id, {headers});

    }

    update(token, conferencia, id): Observable<any>{
      // limpiar campo content  pasa htmlentity a utf8
      conferencia.content = environment.htmlEntities(conferencia.content);

      const json = JSON.stringify(conferencia);
      const params = 'json=' + json;

      const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded').set('Authorization', token);

      return this._http.put(this.serverUrl + 'conferencia/upload/' + id, params, {headers});
    }

    // tslint:disable-next-line: typedef
    delete(token, id){
      const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded').set('Authorization', token);

      return this._http.delete(this.serverUrl + 'conferencia/delete/' + id, {headers});
    }


  }
