import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

//firebase + firestore modules
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
//firebase + firestore modules ends here

//material modules
import { MatNativeDateModule, MatSnackBarModule, MatMenuModule, MatIconModule, MatDialogModule, MatButtonModule, MatTableModule, MatPaginatorModule, MatSortModule, MatTabsModule, MatCheckboxModule, MatToolbarModule, MatCard, MatCardModule, MatFormField, MatFormFieldModule, MatProgressSpinnerModule, MatInputModule } from '@angular/material';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ToastrModule } from 'ngx-toastr';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';
import { EcoFabSpeedDialModule } from '@ecodev/fab-speed-dial';

//material ends modules here

//flex layout module
import { FlexLayoutModule } from '@angular/flex-layout';
//


import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SignupComponent } from './components/signup/signup.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeUserComponent } from './components/home-user/home-user.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { FirestoreSettingsToken} from '@angular/fire/firestore';

//geo related
import { AgmCoreModule } from '@agm/core';


//forms module
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { HomeDoctorComponent } from './components/home-doctor/home-doctor.component';
import { HomeComponent } from './components/home/home.component';
import { CreatePostComponent } from './components/create-post/create-post.component';

import { ReqgeoService } from './services/reqgeo.service';
import { PostService } from './services/post.service';
import { AuthService } from './services/auth.service';
import { CreateEventComponent } from './components/create-event/create-event.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    VerifyEmailComponent,
    NavBarComponent,
    SignupComponent,
    ForgotPasswordComponent,
    HomeUserComponent,
    PageNotFoundComponent,
    HomeDoctorComponent,
    HomeComponent,
    CreatePostComponent,
    CreateEventComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    ToastrModule.forRoot(),
    AgmCoreModule.forRoot({apiKey:environment.googleMapsKey}),
    ReactiveFormsModule,
    MatChipsModule,
    MatTooltipModule,
    EcoFabSpeedDialModule,
    MatTabsModule, MatSidenavModule, MatDividerModule, MatSliderModule, MatMenuModule, MatSelectModule, MatRadioModule, MatNativeDateModule, MatDatepickerModule, MatSnackBarModule, MatIconModule, MatDialogModule, MatProgressSpinnerModule, MatButtonModule, MatSortModule, MatTableModule, MatTabsModule, MatCheckboxModule, MatToolbarModule, MatCardModule, MatFormFieldModule, MatProgressSpinnerModule, MatInputModule, MatPaginatorModule
  ],
  providers: [{ provide: FirestoreSettingsToken, useValue: {} },AuthService,PostService,ReqgeoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
