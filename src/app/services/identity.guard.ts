import { Injectable } from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import { AdminService } from './admin.service';
import {UserService} from './user.service';

@Injectable()
export class IdentityGuard implements CanActivate {

  constructor(
    private router: Router,
    private userService: UserService,
    private adminService: AdminService,
  ){}

  canActivate(){
    //const identity = this.userService.getIdentity();
    const identity = this.adminService.getIdentity();

    if(identity){
      return true;
    }else{
      this.router.navigate(['/login']);
      return false;
    }
  }

}
