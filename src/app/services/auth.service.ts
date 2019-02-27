import { Injectable, NgZone } from '@angular/core';
import { User, Doctor } from "../services/user";
//import { auth } from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore} from '@angular/fire/firestore';
import { Router } from "@angular/router";
import * as firebase from 'firebase';
//import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})


export class AuthService {
  userData: any;
  g:string='asdads';
  constructor(
    public afs: AngularFirestore,   // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,          //injecting router service for routing purposes
    public ngZone: NgZone,
    private toastr: ToastrService
  ) {
    this.afAuth.authState.subscribe(guest => {
      if (guest) {
        this.userData = guest;
        localStorage.setItem('guest', JSON.stringify(this.userData));
        // console.log(this.userData);
        JSON.parse(localStorage.getItem('guest'));
      } else {
        localStorage.setItem('guest', null);
        JSON.parse(localStorage.getItem('guest'));
      }
    })
  }


  // 1   user sign up 
  // 2   user g sign up
  // 3   oauth user
  // 4   info save user

  // 5   doc sign up 
  // 6   doc g sign up
  // 7   oauth doc
  // 8   info save doc

  // 9   user log in
  // 10  user g sign in
  // 11  oauth user
  
  // 12  doc log in
  // 13  doc g sign in
  // 14  oauth doc

  // 15  forgot
  // 16  verify
  // 17  log out
  // 18  isLogged in 

  signUpForUser(email: string, password: string, extraInfo: any) {
    const auth = firebase.auth();
    auth.createUserWithEmailAndPassword(email, password)
    .then((result) => {
      this.toastr.success('Signed Up Successfully');
      this.infoSaveNormalUser(result.user, extraInfo);
      this.sendVerificationMail();
    })
    .catch(error => this.toastr.warning(error.message));
  }

  googleSignUpForUser(extraInfo) {
    return this.oAuthSignUpForUser(new firebase.auth.GoogleAuthProvider(), extraInfo);
  }

  private oAuthSignUpForUser(provider, extraInfo) {
   this.afAuth.auth.signInWithPopup(provider)
    .then((result) => {
      this.infoSaveNormalUser(result.user, extraInfo);
      this.toastr.success('Signed up Successfully');
      this.router.navigate(['home-user']);
  
    })
    .catch((error) => this.toastr.error(error.message));
  }


  infoSaveNormalUser(user: firebase.User, extraInfo: any) {
    let id = this.afs.createId();
    const userRef = this.afs.collection('normal-users').doc(id);
    const userData: User = {
      uid: user.uid,
      name:extraInfo.name,
      email: user.email,
      contact: extraInfo.contact,
      location: extraInfo.location,
      language:extraInfo.language,
      gender:extraInfo.gender,  
      dateOfBirth:extraInfo.dateOfBirth,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified
    }
    userRef.set(userData)
    .then()
    .catch((error) => this.toastr.error(error.message));
  }





  signUpForDoctor(email: string, password: string, extraInfo) {
    const auth = firebase.auth();
    auth.createUserWithEmailAndPassword(email, password)
    .then((result) => {
      alert("Signup process successfull");
      this.infoSaveDoctor(result.user, extraInfo);
      this.sendVerificationMail();
    })
    .catch(error => console.log(error.message));
  }

  googleSignUpForDoctor(extraInfo) {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.oAuthSignUpForDoctor(provider, extraInfo);
  }

  private oAuthSignUpForDoctor(provider, extraInfo) {
    this.afAuth.auth.signInWithPopup(provider)
    .then((result) => {
      this.infoSaveDoctor(result.user, extraInfo);
      this.router.navigate(['home-doctor']);
      console.log("Logging in and saving of doctor data done successfully");
    })
    .catch((error) => console.log(error.message));
  }

  infoSaveDoctor(doctor: firebase.User, extraInfo :any) {
    let id = this.afs.createId();
    const doctorRef = this.afs.collection('doctors').doc(id);
    const doctorData: Doctor = {
      did: doctor.uid,
      name:extraInfo.name,
      email: doctor.email,
      contact: extraInfo.contact,
      location: extraInfo.location,
      language:extraInfo.language,
      gender:extraInfo.gender,  
      docType:extraInfo.docType,
      experience:extraInfo.experience,
      dateOfBirth:extraInfo.dateOfBirth,
      photoURL: doctor.photoURL,
      emailVerified: doctor.emailVerified
    }
    doctorRef.set(Object.assign({}, doctorData))
    .then(() => console.log("doctor added successfully"))
    .catch((error) => console.log(error.message));
  }




  logInForUser(email: string, password: string) {
    const auth = firebase.auth();
    auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      console.log("Login process successfull");
      this.router.navigate(['home-user']);
    })
    .catch(error => console.log(error.message));

  }

  googleLogInForUser() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.oAuthLoginFoorUser(provider);
  }

  private oAuthLoginFoorUser(provider) {
    let promise = this.afAuth.auth.signInWithPopup(provider)
    .then((result) => {
      this.router.navigate(['home-user']);
      console.log("Logging in and saving of doctor data done successfully");
    })
    .catch((error) => console.log(error.message));
  }



  logInForDoctor(email: string, password: string) {
    const auth = firebase.auth();
    auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      console.log("Login process successfull");
      this.router.navigate(['home-doctor']);
    })
    .catch(error => console.log(error.message));
  }

  googleLogInForDoctor() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.oAuthLoginFoorDoctor(provider);
  }

  private oAuthLoginFoorDoctor(provider) {
     this.afAuth.auth.signInWithPopup(provider)
    .then(() => {
      this.router.navigate(['home-doctor']);
      console.log("Logging in and saving of doctor data done successfully");
    })
    .catch((error) => console.log(error.message));
  }



  sendVerificationMail() {
    this.afAuth.auth.currentUser.sendEmailVerification()
    .then(() => this.router.navigate(['verify-email']))
    .catch((error) => console.log(error.message));
  }

  forgotPassword(passwordResetEmail) {
    this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail)
    .then(() => window.alert('Password reset email sent, check your inbox.'))
    .catch((error) => window.alert(error));
  }
 

  logOut() {
    this.afAuth.auth.signOut()
    .then(() => {
      localStorage.removeItem('guest');
      this.router.navigate(['home']);
    })
    .catch((error) => console.log(error.message));
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('guest'));
    return (user !== null) ? true : false;
  }
}






