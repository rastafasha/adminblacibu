import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Params } from '@angular/router';
import {Documento} from '../models/documento';
import { environment } from '../../environments/environment';

@Injectable()
export class DocumentoService{

  public serverUrl: string;
  public documento: string;
  public identity;
  public token;

   constructor(
     // tslint:disable-next-line: variable-name
     private _http: HttpClient
   ){
      this.serverUrl = environment.baseUrl;
    }

    create(token, documento): Observable<any>{
      // limpiar campo content  pasa htmlentity a utf8
      documento.content = environment.htmlEntities(documento.content);

      const json = JSON.stringify(documento);
      const params = 'json=' + json;

      const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded').set('Authorization', token);

      return this._http.put(this.serverUrl + 'documento/', params, {headers});
    }

    getDocumentos(): Observable<any>{
      const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
      return this._http.get(this.serverUrl + 'documento', {headers});

    }

    getDocumento(id): Observable<any>{
      const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
      return this._http.get(this.serverUrl + 'documento/user/' + id, {headers});

    }

    update(token, documento, id): Observable<any>{
      // limpiar campo content  pasa htmlentity a utf8
      documento.content = environment.htmlEntities(documento.content);

      const json = JSON.stringify(documento);
      const params = 'json=' + json;

      const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded').set('Authorization', token);

      return this._http.put(this.serverUrl + 'documento/upload/' + id, params, {headers});
    }

    // tslint:disable-next-line: typedef
    delete(token, id){
      const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded').set('Authorization', token);

      return this._http.delete(this.serverUrl + 'documento/delete/' + id, {headers});
    }


  }
