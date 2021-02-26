import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { environment } from '../../../environments/environment';

import { TipoRegistro } from '../../models/tiporegistro';
import { TipoRegistroService } from '../../services/tiporegistro.service';


import {Admin} from '../../models/admin';
import {AdminService} from '../../services/admin.service';


import { TranslateService } from '@ngx-translate/core';

import { Location } from '@angular/common';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
  providers: [
    TipoRegistroService,
    TranslateService,
    AdminService
  ]
})
export class PerfilComponent implements OnInit, DoCheck {


  @Input() tiporegistro: TipoRegistro;
  @Input() admin: Admin;

  public identity;
  public token;
  public url;
  public status: string;
  public tiporegistros;



  user:any;

  public activeLang = '';

  flag = false;

  constructor(
    private adminService: AdminService,
    private tiporegistroService: TipoRegistroService,
    private router: Router,
    private route: ActivatedRoute,
    private translate: TranslateService,
    private location: Location

  ){
    this.loadUser();
    this.url = environment.baseUrl;
    this.identity = this.adminService.getIdentity();
  }

  // tslint:disable-next-line: typedef
  ngOnInit(){
    // console.log('Webapp cargada correctamente');
    this.getAdmindetail(this.identity.sub);
    //console.log(this.identity);
    this.flag = true;
    window.scrollTo(0, 0);
    this.getTipoRegistro();

  }

  // tslint:disable-next-line: typedef
  ngDoCheck(){
    this.loadUser();

  }

  // tslint:disable-next-line: typedef
  loadUser(){
    this.identity = this.adminService.getIdentity();
    this.token = this.adminService.getToken();
  }



  getAdmindetail(id:number){
    this.adminService.getAdmin(+id).subscribe(
      response => {
        if (response.status === 'success'){
          this.admin = response.admin;
          console.log(this.admin);
        }
      }
    );

  }

  getTipoRegistro(){
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

  goBack() {
    this.location.back(); // <-- go back to previous location on cancel
  }


}
