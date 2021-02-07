
import { Component, OnInit, DoCheck, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';
import { environment } from '../../../environments/environment';

import { AdminService } from '../../services/admin.service';

import { UserPost } from '../../models/userpost';
import { UserPostService } from '../../services/userpost.service';

import { TranslateService } from '@ngx-translate/core';

import { Location } from '@angular/common';

import { Estado } from '../../models/estado';
import { EstadoService } from '../../services/estado.service';
import {TipoRegistroService} from '../../services/tiporegistro.service';

// import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-perfil-certificacion',
  templateUrl: './perfil-certificacion.component.html',
  styleUrls: ['./perfil-certificacion.component.css'],
  providers: [
    AdminService,
    TranslateService,
    UserPostService,
    EstadoService,
    TipoRegistroService
  ]
})
export class PerfilCertificacionComponent implements OnInit, DoCheck {

// colores iconos dinamicos
  color = [
    {
      Content: {
        level: 'green'
      }
    },
    {
      Content: {
        level: 'blue'
      }
    },
    {
      Content: {
        level: 'orange'
      }
    },
    {
      Content: {
        level: 'red'
      }
    }
  ];

  public pageTitle: string;
  public identityAdmin;
  public token;
  public tiporegistro;
  public tiporegistros;
  public url;
  public status: string;

  public isEdit: true;

  @Input() estados: Estado;
  estado: any;

  public activeLang = '';

  public userposts: Array<UserPost>;

  public userpost: any;

  id:any;

  user:any;

  flag = false;
  viewport: any;

  constructor(
    private adminService: AdminService,
    private userpostService: UserPostService,
    private router: Router,
    private route: ActivatedRoute,
    private translate: TranslateService,
    private location: Location,
    private estadoService: EstadoService,
    private tiporegistroService: TipoRegistroService,
  ) {
    this.loadUser();
    this.pageTitle = 'Ver el post';
    this.url = environment.baseUrl;
    this.token = this.adminService.getToken();
    this.identityAdmin = this.adminService.getIdentityAdmin();
  }

  ngOnInit(){
    this.getPost();
    //console.log(this.identity);
    this.flag = true;
    window.scrollTo(0, 0);
    this.getTipoEstado();
    this.getTipoRegistros();


  }

  ngDoCheck(){
    this.loadUser();

  }

  loadUser(){
    this.identityAdmin = this.adminService.getIdentityAdmin();
    this.token = this.adminService.getToken();
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
            console.log(this.userpost);
            console.log(this.userpost.pagos);
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
      this.tiporegistroService.getTipo(id).subscribe(
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

  onSubmit(form){
    this.userpostService.create(this.token, this.userpost).subscribe(
      response => {
        if (response.status === 'success'){
          this.userpost = response.userpost;
          this.status = 'success';
          this.router.navigate(['/usuario/:id/:tiporegistro_id']);
        }else{
          this.status = 'error';
        }
      },
      error => {
        console.log(error);
        this.status = 'error';
      }
    )
  }
  irInicio(){
    this.viewport.scrollToIndex(0);
  }

  /*irFinal(){
    this.viewport.scrollToIndex( this.personas.length);
  }



  irMitad(){
    this.viewport.scrollToIndex( this.personas.length / 2);
  }*/


}
