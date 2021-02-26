import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { environment } from '../../../../environments/environment';

import { UserService } from '../../../services/user.service';
import { User } from '../../../models/users';

import {Admin} from '../../../models/admin';
import {AdminService} from '../../../services/admin.service';

import { TranslateService } from '@ngx-translate/core';

import { TipoRegistro } from '../../../models/tiporegistro';
import { TipoRegistroService } from '../../../services/tiporegistro.service';

import { UserPost } from '../../../models/userpost';
import { UserPostService } from '../../../services/userpost.service';


import { EstadoService } from '../../../services/estado.service';
import { Estado } from '../../../models/estado';

import { Location } from '@angular/common';

@Component({
  selector: 'app-certificados',
  templateUrl: './certificados.component.html',
  styleUrls: ['./certificados.component.css'],
  providers: [
    UserService,
    TranslateService,
    AdminService,
    TipoRegistroService,
    EstadoService
  ]
})
export class CertificadosComponent implements OnInit {

  @Input() tiporegistro: TipoRegistro;

  public users: User;
  public estados: Estado;
  public estado: any;
  user:any;




  public admin: Admin;
  public identity;
  public token;
  public url;
  public status: string;

  public userposts: Array<UserPost>;

  public tiporegistros;
  userpost: any;

  public activeLang = '';
  public activeTipoRegistro = '';

  flag = false;
  tipoRid = false;

  p: Number = 1;
  count: Number = 4;

  constructor(
    private userService: UserService,
    private adminService: AdminService,
    private router: Router,
    private route: ActivatedRoute,
    private translate: TranslateService,
    private userpostService: UserPostService,
    private tiporegistroService: TipoRegistroService,
    private estadoService: EstadoService,
    private location: Location


  ){
    this.loadUser();
    this.loadAdmin();
    this.url = environment.baseUrl;
    this.identity = this.adminService.getIdentity(); }


  ngOnInit(){
    // console.log('Webapp cargada correctamente');
    //console.log(this.identity);
    this.getTodoslosUsers();
    this.getTipoEstados();
    this.getTipoEstado();
    this.getTipoRegistros();
    this.getTipoRegistro();
    this.getPosts();
    this.flag = true;
    window.scrollTo(0, 0);

  }

  // tslint:disable-next-line: typedef
  ngDoCheck(){
    this.loadAdmin();
    this.loadUser();

  }

  // tslint:disable-next-line: typedef
  loadAdmin(){
    this.identity = this.adminService.getIdentity();
    this.token = this.adminService.getToken();
  }
  loadUser(){
    this.identity = this.userService.getIdentity();
    this.token = this.userService.getToken();
  }

  getTodoslosUsers(){
    this.adminService.getAdminUsers().subscribe(
      response => {
        if (response.status === 'success'){
          this.users = response.users;
          console.log(this.users)
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  getTipoRegistros(){
    this.tiporegistroService.getTipos().subscribe(
      response => {
        if (response.status === 'success'){
          this.tiporegistros = response.tiporegistros;
        console.log(this.tiporegistros);
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
        console.log(this.estados);
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
          console.log(this.userposts);
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  deletePost(id){
    this.userpostService.deleteUserPost(id).subscribe(
      response => {
        this.getPosts();
      },
      error => {
        console.log(error);
      }
    );
  }

  goBack() {
    this.location.back(); // <-- go back to previous location on cancel
  }

  getTipoEstado(){


    // sacar el id del post del la url
    this.route.params.subscribe(params => {
      const id = +params.id;

      // peticion ajax para sacar los datos del post
      this.estadoService.getEstado(id).subscribe(
        response => {
          if (response.status === 'success'){
            this.estado = response.estado;
            console.log(this.estado);
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

  getTipoRegistro(){


    // sacar el id del post del la url
    this.route.params.subscribe(params => {
      const id = +params.id;

      // peticion ajax para sacar los datos del post
      this.userpostService.getUserpostTipoRegistro(id).subscribe(
        response => {
          if (response.status === 'success'){
            this.tiporegistro = response.tiporegistro;
            console.log(this.tiporegistro);
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
