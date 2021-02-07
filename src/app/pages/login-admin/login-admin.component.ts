import { Component, OnInit, DoCheck } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { TipoRegistroService } from '../../services/tiporegistro.service';
import { Admin } from '../../models/admin';
import {AdminService} from '../../services/admin.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css'],
  providers: [AdminService]
})
export class LoginAdminComponent implements OnInit {

  public pageTitle: string;
  public admin: Admin;
  public status: string;
  public token;
  public identityAdmin;
  public tiporegistros;

  public activeLang = '';
  flag = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private adminService: AdminService,
    public tiporegistroService: TipoRegistroService
    ) {

    this.admin = new Admin(1, '', '', 'ROLE_ADMIN', 3, '', '', '', '', false, '', '', '', '', '', '', '', '', '', '', '', '', ''  );
  }

  ngOnInit(){
    // se ejecuta siempre y cierra sesion solo cuando le llega el parametro user por la url
    this.logout();
    this.getTipoRegistro();
    window.scrollTo(0, 0);
  }

  onSubmit(form){
    this.adminService.signup(this.admin).subscribe(
      response => {
         // token
         if (response.status != 'error'){
           this.status = 'success';
           this.token = response;

           // objeto usuario identificado
           this.adminService.signup(this.admin, true).subscribe(
             response => {
                this.identityAdmin = response;

                // persistir usuario
                console.log(this.token);
                console.log(this.identityAdmin);

                localStorage.setItem('token', this.token);
                localStorage.setItem('identity', JSON.stringify(this.identityAdmin));

                this.router.navigate(['/admin/home']);
             },
             error => {
                this.status = 'error';
                console.log(error);
             }
           );

         }else{
           this.status = 'error';
         }
      },
      error => {
        this.status = 'error';
        console.log(error as any);
      }
    );

  }

  logout(){
    this.route.params.subscribe(params => {
      const logout = +params.sure;

      if (logout == 1){
        localStorage.removeItem('identity');
        localStorage.removeItem('token');

        this.identityAdmin = null;
        this.token = null;

        // redireccion a inio
        this.router.navigate(['/']);

      }
    });
  }
  ngDoCheck(){
    this.loadUser();
  }

  loadUser(){
    this.identityAdmin = this.adminService.getIdentityAdmin();
    this.token = this.adminService.getToken();
  }



  getTipoRegistro(){
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

}
