import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Params } from '@angular/router';
import {Recconferencia} from '../models/rec-conferencia';
import { environment } from '../../environments/environment';

@Injectable()
export class RecConferenciaService{

  public serverUrl: string;
  public recconferencia: Recconferencia;
  public identity;
  public token;

   constructor(
     // tslint:disable-next-line: variable-name
     private _http: HttpClient
   ){
      this.serverUrl = environment.baseUrl;
    }

    create(token, recconferencia): Observable<any>{
      // limpiar campo content  pasa htmlentity a utf8
      recconferencia.content = environment.htmlEntities(recconferencia.content);

      const json = JSON.stringify(recconferencia);
      const params = 'json=' + json;

      const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded').set('Authorization', token);

      return this._http.put(this.serverUrl + 'recertconferencia/', params, {headers});
    }

    getReConferencias(): Observable<any>{
      const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
      return this._http.get(this.serverUrl + 'recertconferencia', {headers});

    }

    getReConferencia(id): Observable<any>{
      const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
      return this._http.get(this.serverUrl + 'recertconferencia/user/' + id, {headers});

    }

    update(token, recconferencia, id): Observable<any>{
      // limpiar campo content  pasa htmlentity a utf8
      recconferencia.content = environment.htmlEntities(recconferencia.content);

      const json = JSON.stringify(recconferencia);
      const params = 'json=' + json;

      const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded').set('Authorization', token);

      return this._http.put(this.serverUrl + 'recertconferencia/upload/' + id, params, {headers});
    }

    // tslint:disable-next-line: typedef
    delete(token, id){
      const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded').set('Authorization', token);

      return this._http.delete(this.serverUrl + 'recertconferencia/delete/' + id, {headers});
    }


  }
