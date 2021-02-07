import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { routing, appRoutingProviders } from './app.routes';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule, HttpHeaders, HttpClient} from '@angular/common/http';



//servicios
import { IdentityGuard } from './services/identity.guard';

import { UserService } from './services/user.service';
import { PagoService } from './services/pago.service';
import { CertificadoService } from './services/certificado.service';
import { ConferenciaService } from './services/conferencia.service';
import { DocumentoService } from './services/documento.service';
import { TipoRegistroService } from './services/tiporegistro.service';
import { MiembroService } from './services/miembro.service';
import {ConstanciaService} from './services/constancia.service';
import {RecCertificadoService} from './services/rec-certificado.service';
import {RecConferenciaService} from './services/rec-conferencia.service';

import {AdminService} from './services/admin.service';
import {UserPostService} from './services/userpost.service';
import {EstadoService} from './services/estado.service';

// Rutas
import {APP_ROUTES} from './app.routes';


//traductor
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// angular file uploader
import { AngularFileUploaderModule } from 'angular-file-uploader';

//shared
import { SharedModule } from './shared/shared.modulo';

import { PagesModule } from './pages/pages.modulo';

//pagenotfound

// pages
import {
  LoginAdminComponent
} from './pages/index.paginas';



import {NgxPaginationModule} from 'ngx-pagination';
// import { ScrollingModule} from '@angular/cdk/scrolling';





@NgModule({
  declarations: [
    AppComponent,
    LoginAdminComponent,



  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    PagesModule,
    NgxPaginationModule,
    //ScrollingModule
    APP_ROUTES,
    routing,
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
  ],
  providers: [
    appRoutingProviders,
    IdentityGuard,
    UserService,
    PagoService,
    DocumentoService,
    CertificadoService,
    ConferenciaService,
    TipoRegistroService,
    MiembroService,
    ConstanciaService,
    RecCertificadoService,
    RecConferenciaService,
    AdminService,
    UserPostService,
    EstadoService
  ],
  exports:[
    LoginAdminComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
