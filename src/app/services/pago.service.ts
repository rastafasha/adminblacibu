import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Params } from '@angular/router';
import {Pago} from '../models/pago';
import { environment } from '../../environments/environment';

@Injectable()
export class PagoService{

  public serverUrl: string;
  public pago: string;
  public identity;
  public token;

   constructor(
     // tslint:disable-next-line: variable-name
     private _http: HttpClient
   ){
      this.serverUrl = environment.baseUrl;
    }

    create(token, pago): Observable<any>{
      // limpiar campo content  pasa htmlentity a utf8
      pago.content = environment.htmlEntities(pago.content);

      const json = JSON.stringify(pago);
      const params = 'json=' + json;

      const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded').set('Authorization', token);

      return this._http.post(this.serverUrl + 'pago/', params, {headers});
    }

    getPagos(): Observable<any>{
      const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
      return this._http.get(this.serverUrl + 'pago', {headers});

    }

    getPago(id): Observable<any>{
      const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
      return this._http.get(this.serverUrl + 'pago/user/' + id, {headers});

    }

    update(token, pago, id): Observable<any>{
      // limpiar campo content  pasa htmlentity a utf8
      pago.content = environment.htmlEntities(pago.content);

      const json = JSON.stringify(pago);
      const params = 'json=' + json;

      const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded').set('Authorization', token);

      return this._http.put(this.serverUrl + 'pago/update/' + id, params, {headers});
    }

    upload(token, pago, id): Observable<any>{
      // limpiar campo content  pasa htmlentity a utf8
      pago.content = environment.htmlEntities(pago.content);

      const json = JSON.stringify(pago);
      const params = 'json=' + json;

      const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded').set('Authorization', token);

      return this._http.post(this.serverUrl + 'pago/upload/' + id, params, {headers});
    }

    // tslint:disable-next-line: typedef
    delete(token, id){
      const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded').set('Authorization', token);

      return this._http.delete(this.serverUrl + 'pago/delete/' + id, {headers});
    }


  }
