import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { Router, ActivatedRoute, Params, ParamMap } from '@angular/router';
import { HttpClient, HttpBackend} from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

import { TipoRegistro } from '../../models/tiporegistro';
import { TipoRegistroService } from '../../services/tiporegistro.service';


import {Admin} from '../../models/admin';
import {AdminService} from '../../services/admin.service';


import { TranslateService } from '@ngx-translate/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-perfiles',
  templateUrl: './perfiles.component.html',
  styleUrls: ['./perfiles.component.css'],
  providers: [
    TipoRegistroService,
    TranslateService,
    AdminService
  ]
})
export class PerfilesComponent implements OnInit {


  public tiporegistro: TipoRegistro;
  admin: Admin;

  public identityAdmin;
  public token;
  public url;
  public status: string;
  public tiporegistros;

  public activeLang = '';

  flag = false;
  id:any;


  constructor(
    private adminService: AdminService,
    private tiporegistroService: TipoRegistroService,
    private router: Router,
    private route: ActivatedRoute,
    private translate: TranslateService,
    handler: HttpBackend,
    private location: Location

  ){
    this.loadUser();
    this.url = environment.baseUrl;
    this.identityAdmin = this.adminService.getIdentityAdmin();
  }

  ngOnInit(){
    // console.log('Webapp cargada correctamente');
    this.getAdmindetail();
    //console.log(this.identity);
    this.flag = true;
    window.scrollTo(0, 0);
    this.getTipoRegistros();

    this.getTipoRegistro(this.id);
  }

  ngDoCheck(){
    this.loadUser();

  }

  loadUser(){
    this.identityAdmin = this.adminService.getIdentityAdmin();
    this.token = this.adminService.getToken();
  }


  getAdmindetail(){
    // sacar el id del post del la url
    this.route.params.subscribe(params => {
      const id = +params.id;

      // peticion ajax para sacar los datos del post
      this.adminService.getAdmin(id).subscribe(
        response => {
          if (response.status === 'success'){
            this.admin = response.admin;
            console.log(this.admin);
          }else{
            //this.router.navigate(['/inicio']);
          }
        },
        error => {
          console.log(error);
          //this.router.navigate(['/inicio']);
        }
      );

    });

  }

  getTipoRegistros(){
    this.tiporegistroService.getTipos().subscribe(
      response => {
        if (response.status === 'success'){
          this.tiporegistros = response.tiporegistros;
        }
      },
      error => {
        console.log(error);
      }
    );
  }
  getTipoRegistro(id:number){
    this.tiporegistroService.getTipo(+id).subscribe(
      response => {
        if (response.status === 'success'){
          this.tiporegistro = response.tiporegistro;
          //console.log(this.tiporegistro)
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  goBack() {
    this.location.back(); // <-- go back to previous location on cancel
  }

}
