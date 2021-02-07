import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { PAGES_ROUTES } from './pages.routes';

import { SharedModule } from '../shared/shared.modulo';

import { PagesComponent } from './pages.component';


import { CarouselModule } from 'ngx-owl-carousel-o';


import {
  DashboardComponent,
  HomeComponent,
  PerfilComponent,
  PerfilRecertificacionComponent,
  UsuariosComponent,
  UsuarioComponent,
  CreateAdminComponent,
  EditAdminComponent,
  AdminsComponent,
  PerfilesComponent,
  PerfilCertificacionComponent,
  UsuarioEditComponent,
  UsuarioEditRecertificadoComponent,
  UsuarioEditCertificadoComponent,
  CertificadosComponent,
    RecertificadosComponent,
    AprobadosComponent,
    ObservacionComponent,
    RechazadosComponent,
    TiporegistroComponent
} from './index.paginas';


// pipes module
import { OrderModule } from 'ngx-order-pipe';
import { PipesModule } from '../pipes/pipes.module';

import { AngularFileUploaderModule } from 'angular-file-uploader';

//traductor
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {HttpClientModule, HttpHeaders, HttpClient} from '@angular/common/http';

// paginacion
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        HomeComponent,
        PerfilComponent,
        PerfilRecertificacionComponent,
        PerfilCertificacionComponent,
        UsuariosComponent,
        UsuarioComponent,
        CreateAdminComponent,
        EditAdminComponent,
        AdminsComponent,
        PerfilesComponent,
        UsuarioEditComponent,
        CertificadosComponent,
        RecertificadosComponent,
        AprobadosComponent,
        ObservacionComponent,
        RechazadosComponent,
        UsuarioEditRecertificadoComponent,
        UsuarioEditCertificadoComponent,
        TiporegistroComponent

    ],
    exports: [
        PagesComponent,
        DashboardComponent,
        HomeComponent,
        PerfilComponent,
        PerfilRecertificacionComponent,
        PerfilCertificacionComponent,
        UsuariosComponent,
        UsuarioComponent,
        CreateAdminComponent,
        EditAdminComponent,
        AdminsComponent,
        PerfilesComponent,
        UsuarioEditComponent,
        NgxPaginationModule,
        CertificadosComponent,
        RecertificadosComponent,
        AprobadosComponent,
        ObservacionComponent,
        RechazadosComponent,
        UsuarioEditRecertificadoComponent,
        UsuarioEditCertificadoComponent,
        TiporegistroComponent

    ],
    imports: [
        CommonModule,
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        ReactiveFormsModule,
        PipesModule,
        NgxPaginationModule,
        OrderModule,
        CarouselModule,
        AngularFileUploaderModule,
        HttpClientModule,
        TranslateModule.forRoot({
          defaultLanguage: 'es',
          loader: {
            provide: TranslateLoader,
            useFactory: (http: HttpClient) => {
              return new TranslateHttpLoader(http);
            },
            deps: [ HttpClient ]
          }
        }),
    ]
})

export class PagesModule {}
