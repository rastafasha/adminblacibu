import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';

// Guards
import { IdentityGuard } from '../services/identity.guard';


//pages
import { DashboardComponent } from './dashboard/dashboard.component';
import {HomeComponent} from './home/home.component';


import {LoginAdminComponent} from './login-admin/login-admin.component';
import { PerfilCertificacionComponent } from './perfil-certificacion/perfil-certificacion.component';
import {
  UsuariosComponent,
  PerfilComponent,
  UsuarioComponent,
  AdminsComponent,
  CreateAdminComponent,
  EditAdminComponent,
  PerfilesComponent,
  PerfilRecertificacionComponent,
  UsuarioEditComponent,
  CertificadosComponent,
  RecertificadosComponent,
  AprobadosComponent,
  ObservacionComponent,
  RechazadosComponent,
  UsuarioEditRecertificadoComponent,
  TiporegistroComponent
} from './index.paginas';



const pagesRoutes: Routes = [

    {
      path: 'admin',
      component: PagesComponent,
      canActivate: [ IdentityGuard],
      children: [
          {
              path: 'admin',
              component: DashboardComponent,
              canActivate: [ IdentityGuard],
              data: { titulo: 'admin', }
          },
          {path: 'admin', component: DashboardComponent, canActivate: [IdentityGuard]},
          {path: 'home', component: DashboardComponent, canActivate: [IdentityGuard]},
          {path: 'perfil/:id', component: PerfilComponent, canActivate: [IdentityGuard]},
          {path: 'perfiles/:id', component: PerfilesComponent, canActivate: [IdentityGuard]},
          //{path: 'administradores', component: AdminsComponent, canActivate: [IdentityGuard]},
          {path: 'create-admin', component: CreateAdminComponent, canActivate: [IdentityGuard]},
          {path: 'edit-admin/:id', component: EditAdminComponent, canActivate: [IdentityGuard]},
          {path: 'usuarios', component: UsuariosComponent, canActivate: [IdentityGuard]},
          {path: 'usuarios-tiporegistro/:tiporegistro_id', component: TiporegistroComponent, canActivate: [IdentityGuard]},
          {path: 'usuarios-estado/:estado.name/:estado_id', component: TiporegistroComponent, canActivate: [IdentityGuard]},
          {path: 'usuario/:id/:tiporegistro_id', component: UsuarioComponent, canActivate: [IdentityGuard]},
          {path: 'editar-usuario/:id/:tiporegistro_id', component: UsuarioEditComponent, canActivate: [IdentityGuard]},
          {path: 'usuarios-certificados', component: CertificadosComponent, canActivate: [IdentityGuard]},
          {path: 'usuarios-certificados/:id/:tiporegistro_id', component: PerfilCertificacionComponent, canActivate: [IdentityGuard]},
          {path: 'usuarios-recertificados', component: RecertificadosComponent, canActivate: [IdentityGuard]},
          {path: 'usuarios-recertificados/:id/:tiporegistro_id', component: PerfilRecertificacionComponent, canActivate: [IdentityGuard]},
          {path: 'usuarios-aprobados', component: AprobadosComponent, canActivate: [IdentityGuard]},
          {path: 'usuarios-observacion', component: ObservacionComponent, canActivate: [IdentityGuard]},
          {path: 'usuarios-rechazados', component: RechazadosComponent, canActivate: [IdentityGuard]},

      ]

  },

    {path: 'logut', component: LoginAdminComponent},
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
