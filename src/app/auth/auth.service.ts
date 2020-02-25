import { Injectable } from '@angular/core';
import {DataService} from '../data.service';

@Injectable(
  {
  providedIn: 'root'
  }
)
export class AuthService {

  private isAuthenticated: boolean;
  constructor(private dataService: DataService
  ) { }

  public isRouteAuthenticated(): boolean {
    return this.isAuthenticated;
  }

  public setIsAuthenticated(isAuth: boolean): void {
    this.isAuthenticated = isAuth;
  }

}
