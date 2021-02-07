import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Params } from '@angular/router';
import {Certificado} from '../models/certificado';
import { environment } from '../../environments/environment';

@Injectable()
export class CertificadoService{

  public serverUrl: string;
  public certificado: Certificado;
  public identity;
  public token;

   constructor(
     // tslint:disable-next-line: variable-name
     private _http: HttpClient
   ){
      this.serverUrl = environment.baseUrl;
    }

    create(token, certificado): Observable<any>{
      // limpiar campo content  pasa htmlentity a utf8
      certificado.content = environment.htmlEntities(certificado.content);

      const json = JSON.stringify(certificado);
      const params = 'json=' + json;

      const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded').set('Authorization', token);

      return this._http.put(this.serverUrl + 'certificado/', params, {headers});
    }

    getCertificados(): Observable<any>{
      const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
      return this._http.get(this.serverUrl + 'certificado', {headers});

    }

    getCertificado(id): Observable<any>{
      const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
      return this._http.get(this.serverUrl + 'certificado/user/' + id, {headers});

    }

    update(token, certificado, id): Observable<any>{
      // limpiar campo content  pasa htmlentity a utf8
      certificado.content = environment.htmlEntities(certificado.content);

      const json = JSON.stringify(certificado);
      const params = 'json=' + json;

      const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded').set('Authorization', token);

      return this._http.put(this.serverUrl + 'certificado/upload/' + id, params, {headers});
    }

    // tslint:disable-next-line: typedef
    delete(token, id){
      const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded').set('Authorization', token);

      return this._http.delete(this.serverUrl + 'certificado/delete/' + id, {headers});
    }


  }
