import { Component, OnInit, DoCheck  } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { TranslateService } from '@ngx-translate/core';
import { Location } from '@angular/common';

import { AdminService } from '../../../services/admin.service';

import { UserPost } from '../../../models/userpost';
import { UserPostService } from '../../../services/userpost.service';

import { EstadoService } from '../../../services/estado.service';
import { TipoRegistroService } from '../../../services/tiporegistro.service';



@Component({
  selector: 'app-usuario-edit-certificado',
  templateUrl: './usuario-edit-certificado.component.html',
  styleUrls: ['./usuario-edit-certificado.component.css'],
  providers: [
    AdminService,
    EstadoService,
    TranslateService,
    UserPostService,
    TipoRegistroService
  ]
})
export class UsuarioEditCertificadoComponent implements OnInit, DoCheck  {

  public pageTitle: string;
  public identityAdmin;
  public token;
  public status;
  public url: string;

  public userpost: UserPost;
  public estados;
  public tiporegistros;
  public isEdit: true;

  public activeLang = '';


  flag = false;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private adminService: AdminService,
    private estadoService: EstadoService,
    private userpostService: UserPostService,
    private tiporegistroService: TipoRegistroService,
    private translate: TranslateService,
    private location: Location,
  ) {
    this.loadUser();
    this.pageTitle = 'Editar Entrada';
    this.identityAdmin = this.adminService.getIdentityAdmin();
    this.token = this.adminService.getToken();
    this.isEdit = true;
    this.url = environment.baseUrl;
    this.userpost = new UserPost(1, 1, 1, '', '', 'ROLE_ADMIN', 1, '', '', '', '', 1 ,'','','','','','','','','','','','', '');


   }

  ngOnInit(): void {
    this.getEstados();
    this.getTipoRegistros();
    this.getPost();
    this.flag = true;
    window.scrollTo(0, 0);
  }

  ngDoCheck(){
    this.loadUser();

  }

  loadUser(){
    this.identityAdmin = this.adminService.getIdentityAdmin();
    this.token = this.adminService.getToken();
  }


  // tslint:disable-next-line: typedef
  getEstados(){
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

  // tslint:disable-next-line: typedef
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



  // tslint:disable-next-line: typedef
  onSubmit(form){
    this.userpostService.updateUserPost(this.userpost, this.userpost.id).subscribe(
      response => {
        if (response.status == 'success'){
          this.status = 'success';
          // redirigir a la pagina del post
          this.router.navigate(['admin/editar-usuario/', this.userpost.id, this.userpost.tiporegistro_id]);
          //alert('Usuario editado con exito!');
        }else{
          this.status = 'error';
        }
      },
      error => {
        this.status = 'error';

      }
    );
  }

  goBack() {
    this.location.back(); // <-- go back to previous location on cancel
  }


}
