import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';
import { environment } from '../../../environments/environment';

import { AdminService } from '../../services/admin.service';
import { UserService } from '../../services/user.service';
import { User } from '../../models/users';
import { PagoService } from '../../services/pago.service';
import { Conferencia } from '../../models/conferencia';
import { ConferenciaService } from '../../services/conferencia.service';
import { Pago } from '../../models/pago';
import { Reccertificado } from '../../models/rec-certificado';
import { RecCertificadoService } from '../../services/rec-certificado.service';
import { Constancia } from '../../models/constancia';
import { ConstanciaService } from '../../services/constancia.service';
import { TipoRegistro } from '../../models/tiporegistro';
import { TipoRegistroService } from '../../services/tiporegistro.service';
import {Miembro} from '../../models/miembro';
import {MiembroService} from '../../services/miembro.service';
import { Recconferencia } from '../../models/rec-conferencia';
import { RecConferenciaService } from '../../services/rec-conferencia.service';

import { UserPost } from '../../models/userpost';
import { UserPostService } from '../../services/userpost.service';

import { TranslateService } from '@ngx-translate/core';

import { Location } from '@angular/common';
import { Estado } from '../../models/estado';
import { EstadoService } from '../../services/estado.service';


@Component({
  selector: 'app-perfil-recertificacion',
  templateUrl: './perfil-recertificacion.component.html',
  styleUrls: ['./perfil-recertificacion.component.css'],
  providers: [
    AdminService,
    TranslateService,
    UserService,
    PagoService,
    ConferenciaService,
    RecCertificadoService,
    ConstanciaService,
    TipoRegistroService,
    MiembroService,
    TranslateService,
    RecConferenciaService,
    UserPostService,
    EstadoService
  ]
})
export class PerfilRecertificacionComponent implements OnInit, DoCheck {

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

  @Input() users: User;
  @Input() pagos: Pago[];
  @Input() conferencias: Conferencia[];
  @Input() reccertificados: Reccertificado[];
  @Input() constancias: Constancia[];
  @Input() miembros: Miembro[];
  @Input() tiporegistro: TipoRegistro[];
  @Input() recertconferencias: Recconferencia[];
  @Input() estados: Estado;

  public identity;
  public token;
  public url;
  public status: string;

  public activeLang = '';

  public userposts: Array<UserPost>;

  public userpost: any;
  public estado: any;

  id:any;

  user:any;

  flag = false;

  constructor(
    private adminService: AdminService,
    private userService: UserService,
    private userpostService: UserPostService,
    private router: Router,
    private route: ActivatedRoute,
    private translate: TranslateService,
    private location: Location,
    private pagoService: PagoService,
    private recConferenciaService: RecConferenciaService,
    private reccertificadoService: RecCertificadoService,
    private constanciaService: ConstanciaService,
    private tiporegistroService: TipoRegistroService,
    private estadoService: EstadoService,
    private miembroService: MiembroService,

  ){
    this.loadUser();
    this.url = environment.baseUrl;
    this.identity = this.adminService.getIdentity();
  }

  // tslint:disable-next-line: typedef
  ngOnInit(){
    // console.log('Webapp cargada correctamente');
    //this.getUserdetail(this.id);
    this.getPost();
    this.gettodoslosPagos();
    this.gettodoslosConstancias();
    this.gettodoslosMiembros();
    this.gettodoslosReCertificados();
    this.gettodoslosReConferencias();
    this.getTipoEstado();
    //console.log(this.identity);
    this.flag = true;
    window.scrollTo(0, 0);


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



  getUserdetail(id:number){
    this.userService.getUser(this.user.id).subscribe(
      response => {
        if (response.status === 'success'){
          this.user = response.user;
          console.log(this.user);
        }
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
            console.log(this.userpost);
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

  gettodoslosPagos(){
    this.pagoService.getPagos().subscribe(
      response => {
        if (response.status === 'success'){
          this.pagos = response.pagos;
        }
      },
      error => {
        console.log(error);
      }
    );
  }


  gettodoslosReConferencias(){
    this.recConferenciaService.getReConferencias().subscribe(
      response => {
        if (response.status === 'success'){
          this.recertconferencias = response.recertconferencias;
          //console.log(this.documentos);
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  gettodoslosReCertificados(){
    this.reccertificadoService.getReCertificados().subscribe(
      response => {
        if (response.status === 'success'){
          this.reccertificados = response.certificados;
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  gettodoslosConstancias(){
    this.constanciaService.getRecertconstancias().subscribe(
      response => {
        if (response.status === 'success'){
          this.constancias = response.constancias;
          //console.log(this.conferencias)
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  gettodoslosMiembros(){
    this.miembroService.getMiembros().subscribe(
      response => {
        if (response.status === 'success'){
          this.miembros = response.miembros;
          //console.log(this.conferencias)
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



}
