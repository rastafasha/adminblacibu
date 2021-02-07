import {ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule} from '@angular/router';


// pages
import {
  LoginAdminComponent
} from './pages/index.paginas';


const appRoutes: Routes = [
  {path: '', component: LoginAdminComponent},
  {path: 'login-admin', component: LoginAdminComponent},
  {path: '**', component: LoginAdminComponent},
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash: false});
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
