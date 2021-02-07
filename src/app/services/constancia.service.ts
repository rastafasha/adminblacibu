import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Params } from '@angular/router';
import {Constancia} from '../models/constancia';
import { environment } from '../../environments/environment';

@Injectable()
export class ConstanciaService{

  public serverUrl: string;
  public recertconstancia: Constancia;
  public identity;
  public token;

   constructor(
     // tslint:disable-next-line: variable-name
     private _http: HttpClient
   ){
      this.serverUrl = environment.baseUrl;
    }

    create(token, recertconstancia): Observable<any>{
      // limpiar campo content  pasa htmlentity a utf8
      recertconstancia.content = environment.htmlEntities(recertconstancia.content);

      const json = JSON.stringify(recertconstancia);
      const params = 'json=' + json;

      const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded').set('Authorization', token);

      return this._http.put(this.serverUrl + 'recertconstancia/', params, {headers});
    }

    getRecertconstancias(): Observable<any>{
      const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
      return this._http.get(this.serverUrl + 'recertconstancia', {headers});

    }

    getRecertconstancia(id): Observable<any>{
      const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
      return this._http.get(this.serverUrl + 'recertconstancia/user/' + id, {headers});

    }

    update(token, recertconstancia, id): Observable<any>{
      // limpiar campo content  pasa htmlentity a utf8
      recertconstancia.content = environment.htmlEntities(recertconstancia.content);

      const json = JSON.stringify(recertconstancia);
      const params = 'json=' + json;

      const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded').set('Authorization', token);

      return this._http.put(this.serverUrl + 'recertconstancia/upload/' + id, params, {headers});
    }

    // tslint:disable-next-line: typedef
    delete(token, id){
      const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded').set('Authorization', token);

      return this._http.delete(this.serverUrl + 'recertconstancia/delete/' + id, {headers});
    }


  }
