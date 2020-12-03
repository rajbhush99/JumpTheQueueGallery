import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { EventListComponent } from './event/event-list/event-list.component';
import { AuthGuard } from './core/security/auth.guard';


const router: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
 {
   path: 'Register',
   component: RegisterComponent
 },
 {
   path: 'event-list',
   component: EventListComponent,
   canActivate: [AuthGuard]
 },
 {
  path: '**' , redirectTo: 'login' , pathMatch: 'full'
}
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(router)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
