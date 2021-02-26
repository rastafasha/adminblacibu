import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { Router, ActivatedRoute, Params, ParamMap } from '@angular/router';
import { environment } from '../../../../environments/environment';

import { UserService } from '../../../services/user.service';
import { User } from '../../../models/users';

import { Admin} from '../../../models/admin';
import {AdminService} from '../../../services/admin.service';

import { TranslateService } from '@ngx-translate/core';

import { TipoRegistro } from '../../../models/tiporegistro';
import { TipoRegistroService } from '../../../services/tiporegistro.service';

import { UserPost } from '../../../models/userpost';
import { UserPostService } from '../../../services/userpost.service';

import { Observable } from 'rxjs';

import { EstadoService } from '../../../services/estado.service';
import { Estado } from '../../../models/estado';


import { Location } from '@angular/common';

@Component({
  selector: 'app-tiporegistro',
  templateUrl: './tiporegistro.component.html',
  styleUrls: ['./tiporegistro.component.css'],
  providers: [
    UserService,
    TranslateService,
    AdminService,
    UserPostService,
    TipoRegistroService,
    EstadoService
  ]
})
export class TiporegistroComponent implements OnInit {


  userposts: UserPost[];
  desde: number = 0;

  totalRegistros: number = 0;

	private total: number = 0;


  public users: User[];
  public estados: Estado[];
  public estado: any;
  user:any;

  public admin: Admin[];
  public identity;
  public token;
  public url;
  public status: string;
  public tiporegistros;

  public userpost: any;
  public tiporegistro: any;
  // public userposts: Array<UserPost>;

  public activeLang = '';
  public activeTipoRegistro = '';

  flag = false;

  usertiporegistros: any;
  tipo: any


  p: Number = 1;
  count: Number = 4;

  constructor(
    public userService: UserService,
    private adminService: AdminService,
    private userpostService: UserPostService,
    public tipoRegistroService: TipoRegistroService,
    public estadoService: EstadoService,
    private router: Router,
    private route: ActivatedRoute,
    private translate: TranslateService,
    private location: Location


  ){
    this.loadAdmin();
    this.loadUser();
    this.url = environment.baseUrl;
    this.identity = this.adminService.getIdentity();
    this.identity = this.userService.getIdentity();

  }

  // tslint:disable-next-line: typedef
  ngOnInit(){
    // console.log('Webapp cargada correctamente');
    //this.getUserdetail(this.identity);
    this.flag = true;
    window.scrollTo(0, 0);

    this.getPosts();
    this.getTipoEstados();
    this.getTipoEstado();
    this.loadCart();


  }

  ngDoCheck(){
    this.loadUser();
    this.loadAdmin();

  }

  loadAdmin(){
    this.identity = this.adminService.getIdentity();
    this.token = this.adminService.getToken();
  }

  loadUser(){
    this.identity = this.userService.getIdentity();
    this.token = this.userService.getToken();
  }




// estados de usuarios

  getTipoEstados(){


    this.estadoService.getEstados().subscribe(
      response => {
        if (response.status === 'success'){
          this.estados = response.estados;
        //console.log(this.estados);
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  getTipoEstado(){


    // sacar el id del post del la url
    this.route.params.subscribe(params => {
      const id = +params.id;

      // peticion ajax para sacar los datos del post
      this.estadoService.getUserPostbyEstado(id).subscribe(
        response => {
          if (response.status === 'success'){
            this.identity.status_id = response.estado;
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



// usuarios como posts
  getPosts(){
    this.userpostService.getPosts().subscribe(
      response => {
        if (response.status === 'success'){
          this.userposts = response.userposts;
          console.log(this.userposts);

          const tipo = this.userposts.map(data => data.tiporegistro_id.valueOf());
          console.log(tipo); // total de usuarios en un numero
          console.log(tipo.length); // total de usuarios en un numero
          console.log(tipo.filter(tipo => tipo === 1)); // arreglo de un tipo
          console.log(tipo.filter(tipo => tipo === 2)); // arreglo de un tipo


        }
        console.log(this.tipo); // total de usuarios con tiporegistro
      },
      error => {
        console.log(error);
      }
    );
  }

  loadCart(){
		this.total = 0;
    this.userposts = [];
    const tipo = this.userposts.map(data => data.tiporegistro_id.valueOf());
		for (var i = 0; i < tipo.length; i++) {
			let userpost = JSON.parse(this.tiporegistro[i]);
			this.tipo.push({
				tiporegistro_id: userpost.tiporegistro_id,
				status_id: userpost.status_id
			});
      this.total = userpost.tiporegistro_id.length;
      console.log(this.total);
		}
	}


  getTipoRegistros(){
    this.tipoRegistroService.getTipos().subscribe(
      response => {
        if (response.status === 'success'){
          this.tiporegistros = response.tiporegistros;
          console.log(this.tiporegistros)
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



}
