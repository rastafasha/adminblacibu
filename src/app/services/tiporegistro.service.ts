import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Category} from '../models/category';
import { environment } from '../../environments/environment';
import { Params } from '@angular/router';

@Injectable()
export class TipoRegistroService{

  public serverUrl: string;
  public user: string;
  public identity;
  public token;

   constructor(
     // tslint:disable-next-line: variable-name
     private _http: HttpClient
   ){
      this.serverUrl = environment.baseUrl;
    }

    create(token, tiporegistros): Observable<any>{
      const json = JSON.stringify(tiporegistros);
      const params = 'json=' + json;
      const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded').set('Authorization', token);

      return this._http.put(this.serverUrl + 'tiporegistro', params, {headers});
    }

    getTipos(): Observable<any>{
      const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
      return this._http.get(this.serverUrl + 'tiporegistro', {headers});

    }

    getTipo(id): Observable<any>{
      const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
      return this._http.get(this.serverUrl + 'tiporegistro/' + id, {headers});

    }

    getPagos(id): Observable<any>{
      const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
      return this._http.get(this.serverUrl + 'post/tiporegistro/' + id, {headers});

    }

    getTipoRegistroDetails(id): Observable<any>{
      const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
      return this._http.get(this.serverUrl + 'tiporegistro/detail/' + id, {headers});

    }





    getUserPosts(id): Observable<any>{
      const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
      return this._http.get(this.serverUrl + 'userpost/estadouser/' + id, {headers});

    }



  }

