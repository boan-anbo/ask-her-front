import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BackComponent} from './back/back.component';
import {MainComponent} from './main/main.component';
import {AuthGuard} from './auth/auth-guard.service';


const routes: Routes = [
  { path: ':id/back', component: BackComponent, canActivate: [AuthGuard] },
  { path: '', component: MainComponent},
  // { path: 'back', component: BackComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
