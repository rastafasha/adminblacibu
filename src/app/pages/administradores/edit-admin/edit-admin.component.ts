import { Component, OnInit, DoCheck } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { TranslateService } from '@ngx-translate/core';
import { Location } from '@angular/common';

import {Admin} from '../../../models/admin';
import { AdminService } from '../../../services/admin.service';



@Component({
  selector: 'app-edit-admin',
  templateUrl: './edit-admin.component.html',
  styleUrls: ['./edit-admin.component.css'],
  providers: [AdminService, TranslateService]
})
export class EditAdminComponent implements OnInit, DoCheck  {

  public pageTitle: string;
  public identityAdmin;
  public status;
  public token;
  public url;

  public admin: Admin;
  public activeLang = '';

  flag = false;

  public isEdit: true;


  public afuConfig = {
    multiple: false,
    formatsAllowed: '.jpg, .png, .gif, .jpeg',
    method: 'POST',
    maxSize: '2',
    uploadAPI:  {
      url: environment.baseUrl + 'admin/upload',
      headers: {
        Authorization: this.adminService.getToken(),
      },
      responseType: 'json',
    },
    theme: 'attachPin',
    selectFileBtn: 'Select Files',
    hideProgressBar: false,
    hideResetBtn: true,
    hideSelectBtn: false,
    attachPinText: 'Sube tu Avatar de Usuario',
    afterUploadMsg_success: 'Se cargó correctamente la imagen',
    afterUploadMsg_error: 'Se produjo un error al subir el archivo',
};

  constructor(
    private adminService: AdminService,
    private location: Location,
    private route: ActivatedRoute,
    private router: Router,
    private translate: TranslateService,
    ) {

    this.loadUser();
    this.identityAdmin = this.adminService.getIdentityAdmin();
    this.token = this.adminService.getToken();
    this.url = environment.baseUrl;
    this.admin = new Admin(1, '', '', 'ROLE_ADMIN', 3, '', '', '', '', null, '','','','','','','','','','','','',''  );

    // rellenar objeto usuario
    /*this.admin = new Admin(
      this.identityAdmin.sub,
      this.identityAdmin.email,
      this.identityAdmin.password,
      this.identityAdmin.role,
      this.identityAdmin.tiporegistro_id,
      this.identityAdmin.idioma,
      this.identityAdmin.pais,
      this.identityAdmin.name,
      this.identityAdmin.surname,
      this.identityAdmin.estado,
      this.identityAdmin.pasaporte,
      this.identityAdmin.fecha_nac,
      this.identityAdmin.edad,
      this.identityAdmin.lugar_nac,
      this.identityAdmin.nacionalidad,
      this.identityAdmin.telefono,
      this.identityAdmin.direccion,
      this.identityAdmin.cod_postal,
      this.identityAdmin.pais_ejerce,
      this.identityAdmin.rrss_facebook,
      this.identityAdmin.rrss_instagram,
      this.identityAdmin.rrss_twitter,
      this.identityAdmin.image,

    );*/
  }




  ngOnInit(): void {
    this.flag = true;
    this.loadUser();
    this.getAdmindetail();
    window.scrollTo(0, 0);
  }

  // tslint:disable-next-line: typedef
  ngDoCheck(){
    this.loadUser();

  }

  // tslint:disable-next-line: typedef
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

  onSubmit(form){
    this.adminService.updateAdmines(this.admin).subscribe(
      response => {
        if (response && response.status){
          console.log(response);
          this.status = 'success';

          // Actualizar usuario en sesion
          if (response.changes.name){
            this.admin.name = response.changes.name;
          }
          if (response.changes.surname){
            this.admin.surname = response.changes.surname;
          }
          if (response.changes.email){
            this.admin.email = response.changes.email;
          }
          if (response.changes.fecha_nac){
            this.admin.fecha_nac = response.changes.fecha_nac;
          }
          if (response.changes.pasaporte){
            this.admin.pasaporte = response.changes.pasaporte;
          }
          if (response.changes.edad){
            this.admin.edad = response.changes.edad;
          }
          if (response.changes.lugar_nac){
            this.admin.lugar_nac = response.changes.lugar_nac;
          }
          if (response.changes.nacionalidad){
            this.admin.nacionalidad = response.changes.nacionalidad;
          }
          if (response.changes.telefono){
            this.admin.telefono = response.changes.telefono;
          }
          if (response.changes.direccion){
            this.admin.direccion = response.changes.direccion;
          }
          if (response.changes.cod_postal){
            this.admin.cod_postal = response.changes.cod_postal;
          }
          if (response.changes.pais_ejerce){
            this.admin.pais_ejerce = response.changes.pais_ejerce;
          }
          if (response.changes.rrss_facebook){
            this.admin.rrss_facebook = response.changes.rrss_facebook;
          }
          if (response.changes.rrss_instagram){
            this.admin.rrss_instagram = response.changes.rrss_instagram;
          }
          if (response.changes.rrss_twitter){
            this.admin.rrss_twitter = response.changes.rrss_twitter;
          }
          if (response.changes.image){
            this.admin.image = response.changes.image;
          }

          this.admin = response.admin;
          localStorage.setItem('identity', JSON.stringify(this.admin));
          // redirigir a la pagina del post
          this.router.navigate(['admin/editar-usuario/', this.admin.id, this.admin.tiporegistro_id]);
          alert('Admin Editado')
        }
      },
      error => {
        this.status = 'error';
        console.log(error);
      }
    );
  }

  /*onSubmit(form){


    this.adminService.updateAdministrador(this.admin, this.admin.id).subscribe(
      response => {
        if (response.status == 'success'){
          this.status = 'success';
          // redirigir a la pagina del post
          this.router.navigate(['admin/edit-admin/', this.admin.id]);
          alert('Admin `{{admin.sub}}` editado con exito!');
        }else{
          this.status = 'error';
        }
      },
      error => {
        this.status = 'error';

      }
    );
  }*/


  avatarUpload(datos){
    // const data = JSON.parse(datos.response);
    const data = JSON.parse(JSON.stringify(datos.body));

    console.log(datos);
    console.log(JSON.parse(datos));
    console.log(JSON.stringify(datos));
    console.log(JSON.parse(JSON.stringify(datos.body)));

    this.admin.image = data.image;
  }

  goBack() {
    this.location.back(); // <-- go back to previous location on cancel
  }

}
