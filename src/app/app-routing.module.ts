import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
//import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { HomeUserComponent } from './components/home-user/home-user.component';
import { AuthGuard } from "./services/guard/auth.guard";
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { HomeDoctorComponent } from './components/home-doctor/home-doctor.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { CreateEventComponent } from './components/create-event/create-event.component';
const routes: Routes = [
  {path: "", redirectTo:"/home", pathMatch:"full"},
  {path: "login", component: LoginComponent},
  {path: "signup", component: SignupComponent},
  {path: "forgot-password", component: ForgotPasswordComponent},
  {path: "home", component: HomeComponent},
  {path: "verify-email", component: VerifyEmailComponent},
  {path:"home-user",component:HomeUserComponent,canActivate:[AuthGuard]},
  {path:"home-doctor",component:HomeDoctorComponent,canActivate:[AuthGuard]},
  {path:"create-post",component:CreatePostComponent,canActivate:[AuthGuard]},
  {path:"create-event",component:CreateEventComponent,canActivate:[AuthGuard]},
  {path:"page-not-found",component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
