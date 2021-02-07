import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Params } from '@angular/router';
import {Reccertificado} from '../models/rec-certificado';
import { environment } from '../../environments/environment';

@Injectable()
export class RecCertificadoService{

  public serverUrl: string;
  public reccertificado: Reccertificado;
  public identity;
  public token;

   constructor(
     // tslint:disable-next-line: variable-name
     private _http: HttpClient
   ){
      this.serverUrl = environment.baseUrl;
    }

    create(token, reccertificado): Observable<any>{
      // limpiar campo content  pasa htmlentity a utf8
      reccertificado.content = environment.htmlEntities(reccertificado.content);

      const json = JSON.stringify(reccertificado);
      const params = 'json=' + json;

      const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded').set('Authorization', token);

      return this._http.put(this.serverUrl + 'recertcertificado/', params, {headers});
    }

    getReCertificados(): Observable<any>{
      const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
      return this._http.get(this.serverUrl + 'recertcertificado', {headers});

    }

    getReCertificado(id): Observable<any>{
      const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
      return this._http.get(this.serverUrl + 'recertcertificado/user/' + id, {headers});

    }

    update(token, reccertificado, id): Observable<any>{
      // limpiar campo content  pasa htmlentity a utf8
      reccertificado.content = environment.htmlEntities(reccertificado.content);

      const json = JSON.stringify(reccertificado);
      const params = 'json=' + json;

      const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded').set('Authorization', token);

      return this._http.put(this.serverUrl + 'recertcertificado/upload/' + id, params, {headers});
    }

    // tslint:disable-next-line: typedef
    delete(token, id){
      const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded').set('Authorization', token);

      return this._http.delete(this.serverUrl + 'recertcertificado/delete/' + id, {headers});
    }


  }
