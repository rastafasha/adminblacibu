import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { environment } from '../../../environments/environment';

import { HttpClient, HttpBackend} from '@angular/common/http';

import { UserService } from '../../services/user.service';
import { User } from '../../models/users';

import { Admin } from '../../models/admin';
import {AdminService} from '../../services/admin.service';

import { TranslateService } from '@ngx-translate/core';
import { EstadoService } from '../../services/estado.service';
import { TipoRegistro } from '../../models/tiporegistro';
import { TipoRegistroService } from '../../services/tiporegistro.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [
    TranslateService,
    AdminService,
    TipoRegistroService,
    UserService,
    EstadoService
  ]

})
export class DashboardComponent implements OnInit {

  @Input() tiporegistro: TipoRegistro;

  public users: any = {};
  public admines: Admin;
  public identity;
  public token;
  public url;
  public status: string;

  usuarios: User[] = [];
  admin:any;

  desde: number = 0;
  totalRegistros: number = 0;
  $scope :any;

  public estados;
  public estado=[{}];


  public activeLang = '';
  public activeAdmin = '';
  flag = false;

  public activeTipoRegistro = '';
  private http: HttpClient;


  p: Number = 1;
  count: Number = 5;

  constructor(
    private adminService: AdminService,
    private router: Router,
    private route: ActivatedRoute,
    private translate: TranslateService,
    handler: HttpBackend,
    private estadoService: EstadoService,

  ){
    this.http = new HttpClient(handler);
    this.loadUser();
    this.url = environment.baseUrl;
    this.identity = this.adminService.getIdentity();
    this.admin = new Admin(1, '', '', 'ROLE_ADMIN', 3, '', '', '', '', false, '','','','','','','','','','','','',''  );

    // rellenar objeto usuario
    this.admin = new Admin(
      this.identity.sub,
      this.identity.email,
      this.identity.password,
      this.identity.role,
      this.identity.tiporegistro_id,
      this.identity.idioma,
      this.identity.pais,
      this.identity.name,
      this.identity.surname,
      this.identity.estado,
      this.identity.pasaporte,
      this.identity.fecha_nac,
      this.identity.edad,
      this.identity.lugar_nac,
      this.identity.nacionalidad,
      this.identity.telefono,
      this.identity.direccion,
      this.identity.cod_postal,
      this.identity.pais_ejerce,
      this.identity.rrss_facebook,
      this.identity.rrss_instagram,
      this.identity.rrss_twitter,
      this.identity.image,

    );
  }


  ngOnInit(){
    this.getTodoslosAdmins();
    //console.log(this.identity);
    this.flag = true;
    window.scrollTo(0, 0);

    this.getTotalCount();
    this.getTodoslosUsers();
    // this.getEstados();

  }

  ngDoCheck(){
    this.loadUser();

  }

  loadUser(){
    this.identity = this.adminService.getIdentity();
    this.token = this.adminService.getToken();
  }

  getTodoslosAdmins(){
    this.adminService.getAdminAdmins().subscribe(
      response => {
        if (response.status === 'success'){
          this.admines = response.admines;
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  getTodoslosUsers(){
    this.adminService.getAdminUsers().subscribe(
      response => {
        if (response.status === 'success'){
          this.users = response.users;
        }
       else if (this.users.tiporegistro_id === '1' ){
          this.users = this.users.tipoc.length;
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  getTotalCount(){
    this.adminService.getAdminUsers()
      .subscribe( (resp: any) => {

        this.totalRegistros = resp.total;
        this.users = resp.users;

      });
  }



  public active(id) {
    this.activeAdmin = this.admin.estado;

  }

  getEstados(){
    this.adminService.getAdminAdmins().subscribe(
      response => {
        if (response.status === 'success'){
          this.admin.estado = response.admin.estado;
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  onSubmit(form){
    this.adminService.update(this.token, this.admin).subscribe(
      response => {
        if (response && response.status){
          console.log(response);
          this.status = 'success';

          // Actualizar admin
          if (response.changes.estado){
            this.admin.estado = response.changes.estado;
          }


          this.identity = response.admin;
          localStorage.setItem('identity', JSON.stringify(this.identity));
        }
      },
      error => {
        this.status = 'error';
        console.log(error);
      }
    );
  }


}
