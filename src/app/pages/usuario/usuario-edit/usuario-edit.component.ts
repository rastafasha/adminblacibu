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

@Component({
  selector: 'app-usuario-edit',
  templateUrl: './usuario-edit.component.html',
  styleUrls: ['./usuario-edit.component.css'],
  providers: [
    UserService,
    TranslateService,
    AdminService,
    UserPostService,
    TipoRegistroService
  ]
})
export class UsuarioEditComponent implements OnInit, DoCheck {

  @Input() tiporegistro: TipoRegistro;


  users:Admin;

  public admin: Admin;
  public identity;
  public token;
  public url;
  public status: string;
  public tiporegistros;

  user: Observable<Admin>;
  public userpost: UserPost;

  public activeLang = '';
  public activeTipoRegistro = '';

  flag = false;

  constructor(
    public userService: UserService,
    private adminService: AdminService,
    private userpostService: UserPostService,
    public tipoRegistroService: TipoRegistroService,
    private router: Router,
    private route: ActivatedRoute,
    private translate: TranslateService,


  ){
    this.loadAdmin();
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

    this.getPost();
    this.getTipoRegistros();
    //this.getTipoRegistro(this.userpost.id);


  }

  ngDoCheck(){
    this.loadAdmin();

  }

  loadAdmin(){
    this.identity = this.adminService.getIdentity();
    this.token = this.adminService.getToken();
  }



  getUserdetail(id:number){
    this.adminService.getAdminUserDetail(+id).subscribe(
      response => {
        if (response.status === 'success'){
          this.user = response.user;
          //console.log(this.user);
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

  getTipoRegistros(){
    this.tipoRegistroService.getTipos().subscribe(
      response => {
        if (response.status === 'success'){
          this.tiporegistros = response.tiporegistros;
          //console.log(this.tiporegistros)
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  getTipoRegistro(id:number){
    this.tipoRegistroService.getTipo(this.userpost.id).subscribe(
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



}
