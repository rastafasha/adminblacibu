import { Component, OnInit, DoCheck } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { environment } from '../../../environments/environment';
import { TranslateService } from '@ngx-translate/core';
import { EstadoService } from '../../services/estado.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  providers: [AdminService,  TranslateService,
    EstadoService]
})
export class SidebarComponent implements OnInit, DoCheck {

  public identity;
  public token;
  public url;
  public categories;
  public activeLang = '';

  public tiporegistros;
  public estados;

  flag = false;

  constructor(
    private adminService: AdminService,
    private translate: TranslateService,
    private estadoService: EstadoService,
  ){
    this.loadUser();
    this.url = environment.baseUrl;
    this.identity = this.adminService.getIdentity();
  }

  // tslint:disable-next-line: typedef
  ngOnInit(){
    this.flag = true;
    this.getTipoEstados();
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

  getTipoEstados(){
    this.estadoService.getEstados().subscribe(
      response => {
        if (response.status === 'success'){
          this.estados = response.estados;
        }
      },
      error => {
        console.log(error);
      }
    );
  }

}
