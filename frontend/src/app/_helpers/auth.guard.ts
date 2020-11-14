import { Injectable } from '@angular/core';
import { Router, CanActivate, CanLoad, ActivatedRoute ,ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../_services';
import { VariablesGlobales } from '../variablesGlobales';
import { delay } from 'rxjs/internal/operators';
import { Observable, pipe } from 'rxjs';
import { filter } from 'rxjs/operators';
import { map,  } from 'rxjs/operators'

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  previousUrl: string;
  currentUser: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private variablesGlobales : VariablesGlobales,
    private authenticationService: AuthenticationService,

  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.authenticationService.currentUserObs().pipe(map(res => {
      console.log(res)
      const currentUser = res;


        if (currentUser) {
          if (route.data.roles && route.data.roles.indexOf(currentUser.role) === -1) {
            if(currentUser.role === 'OWNER'){
              this.router.navigate(['landlord']);
              return false;
            }
            else if(currentUser.role === 'ADMIN'){
              this.router.navigate(['admin']);
              return false;
            }
            else if(currentUser.role === 'GUEST' && route.data.roles.indexOf("USER") === -1){
              this.router.navigate(['user']);
              return false;
            }
            else if(currentUser.role === 'GUEST' && route.data.roles.indexOf("USER") != -1 ){
              return true;
            }
            else{
              this.router.navigate(['/']);
              console.log('else')
              return false;
            }
            return false;
          }
          else{
            return true;
          }
        }
        else if(route.data.roles && route.data.roles.indexOf("USER") === -1 && currentUser != false) {
          // not logged in so redirect to login page with the return url
          this.router.navigate(['/login']);
          return false;
        }
        else {
          return true;
        }
      
    }))

    // if (this.currentUser) {
    //
    //   if (route.data.roles && route.data.roles.indexOf(this.currentUser.role) === -1) {
    //     if(this.currentUser.role === 'OWNER'){
    //       this.router.navigate(['landlord']);
    //       return false;
    //     }
    //     else if(this.currentUser.role === 'ADMIN'){
    //       this.router.navigate(['admin']);
    //       return false;
    //     }
    //     else if(this.currentUser.role === 'GUEST' && route.data.roles.indexOf("USER") === -1){
    //       this.router.navigate(['user']);
    //       return false;
    //     }
    //     else if(this.currentUser.role === 'GUEST' && route.data.roles.indexOf("USER") != -1 ){
    //       return true;
    //     }
    //     else{
    //       this.router.navigate(['/']);
    //       console.log('else')
    //       return false;
    //     }
    //     return false;
    //   }
    //   else{
    //     return true;
    //   }
    // }
    // else if(route.data.roles && route.data.roles.indexOf("USER") === -1 && this.currentUser != "Null") {
    //   // not logged in so redirect to login page with the return url
    //   this.router.navigate(['/login']);
    //   return false;
    // }
    // else {
    //   console.log("2")
    //   return true;
    // }
  }
}
