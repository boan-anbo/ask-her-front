import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';
import {DataService} from '../data.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router, private dataService: DataService) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    // console.log(state)
    // console.log(next)
    return this.dataService.checkAuth(next.params?.id).pipe(
      map(data => {
        // console.log(data)
        if (data === false) {
          return false;
        } else {
          return true;
        }
      })
    )
    // if (this.authService.isRouteAuthenticated()) {
    //   console.log(state.toString());
    //   // return true;
    // }
    // this.router.navigate['back'];
    // return false;
  }

}
