import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { environment } from '../../../../environments/environment';

import { Location } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import {Admin} from '../../../models/admin';
import {AdminService} from '../../../services/admin.service';
import { TipoRegistroService } from '../../../services/tiporegistro.service';

@Component({
  selector: 'app-create-admin',
  templateUrl: './create-admin.component.html',
  styleUrls: ['./create-admin.component.css'],
  providers: [
    AdminService,
    TranslateService,
    TipoRegistroService

  ]
})
export class CreateAdminComponent implements OnInit {

  public admin: Admin;
  public token;
  public identityAdmin;
  public activeLang = '';
  public url;
  public status: string;
  public tiporegistros;

  flag = false;

  constructor(
    private location: Location,
    private adminService: AdminService,
    private tiporegistroService: TipoRegistroService,
    private translate: TranslateService,
    private router: Router,
    ) {
      this.loadUser();
    this.url = environment.baseUrl;
    this.identityAdmin = this.adminService.getIdentityAdmin();
    this.admin = new Admin(1, '', '', 'ROLE_ADMIN', 3, '', '', '', '', false, '','','','','','','','','','','','',''  );

    }

  ngOnInit(): void {
    //console.log(this.identityAdmin);
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
    this.identityAdmin = this.adminService.getIdentityAdmin();
    this.token = this.adminService.getToken();
  }

  goBack() {
    this.location.back(); // <-- go back to previous location on cancel
  }

  onSubmit(form){

    this.adminService.register(this.admin).subscribe(
      response => {

        if (response.status == 'success'){
          this.status =  response.status;
          form.reset();

          this.router.navigate(['/admin/admin']);

        }else{
          this.status = 'error';
        }
      },
      error => {
        this.status = 'error';
        console.log( error as any);
      }
    );

  }

  getTipoRegistro(){
    this.tiporegistroService.getTipos().subscribe(
      response => {
        if (response.status === 'success'){
          this.tiporegistros = response.tiporegistros;
          //console.log(this.tiporegistros);
        }
      },
      error => {
        console.log(error);
      }
    );
  }


}
