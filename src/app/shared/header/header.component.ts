import { Component, OnInit, DoCheck, Input } from '@angular/core';
import { environment } from '../../../environments/environment';
import { ActivatedRoute, Router } from '@angular/router';


import { TranslateService } from '@ngx-translate/core';

import { AdminService } from '../../services/admin.service';

import { Admin } from 'src/app/models/admin';
import {TipoRegistroService} from '../../services/tiporegistro.service';
import { EstadoService } from '../../services/estado.service';

import { UserPost } from '../../models/userpost';
import { UserPostService } from '../../services/userpost.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [
    AdminService,
    TranslateService,
    TipoRegistroService,
    EstadoService,
    UserPostService]
})
export class HeaderComponent implements OnInit, DoCheck {

  public identity;
  public token;
  public url;
  public tiporegistros;
  public estados;

  admin: Admin;

  public activeLang = 'es';
  flag = false;

  es = true;
  pt = false;

  estado: boolean;

  Activo = true;
  Inactivo = false;

  public userposts: Array<UserPost>;
  public userpost: UserPost;

  constructor(
    private adminService: AdminService,
    private tiporegistroService: TipoRegistroService,
    private estadoService: EstadoService,
    private router: Router,
    private route: ActivatedRoute,
    private translate: TranslateService,
    private userpostService: UserPostService,
  ){
    this.loadUser();
    this.url = environment.baseUrl;
    this.identity = this.adminService.getIdentity();
    this.translate.setDefaultLang(this.activeLang);
  }

  ngOnInit(){
    this.flag = true;

    this.estado = true;
    this.activeLang = this.identity.idioma;
    this.getTipoRegistros();
    this.getTipoEstados();
    this.getPosts();

  }

  ngDoCheck(){
    this.loadUser();
  }


  loadUser(){
    this.identity = this.adminService.getIdentity();
    this.token = this.adminService.getToken();
  }


  public cambiarLenguaje(lang) {
    this.activeLang = lang;
    //this.identity.idioma = lang;
    this.translate.use(lang);
    this.flag = !this.flag;

  }



  update(){
    location.reload();
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

  getTipoEstados(){
    this.estadoService.getEstados().subscribe(
      response => {
        if (response.status === 'success'){
          this.estados = response.estados;
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  getPosts(){
    this.userpostService.getPosts().subscribe(
      response => {
        if (response.status === 'success'){
          this.userposts = response.userposts;
          //console.log(this.userposts);
          console.log(this.userposts.concat(this.estados));
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  getPost(){
    // sacar el id del post del la url
    this.route.params.subscribe(params => {
      const id = +params.id;

      // peticion ajax para sacar los datos del post
      this.userpostService.getPost(id).subscribe(
        response => {
          if (response.status === 'success'){
            this.userpost = response.userpost;
            //console.log(this.userpost);
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

}
