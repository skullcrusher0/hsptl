import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import * as geofirex from 'geofirex';
import { Observable, BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Post } from 'src/app/services/user';
import { GeoQueryDocument } from 'geofirex';
firebase.initializeApp({
  projectId: "hsptl-bd82f",
  apiKey: "AIzaSyD9rusQbtTj2rOBxHJ-pbw_p5behA3xN6Y",
  authDomain: "hsptl-bd82f.firebaseapp.com",
})
@Injectable({
  providedIn: 'root'
})
export class ReqgeoService {
  lat: any;
  lng: any;
  geo = geofirex.init(firebase.app());
  postDoc: Observable<GeoQueryDocument[]>;
  radius = new BehaviorSubject(10);

  constructor() { }
  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
      });
    }
  }

  getPosts() {
    // const center = this.geo.point(this.lat, this.lng);
    // this.postDoc = this.radius.pipe(
    //   switchMap(r=>{
    //     return this.geo.collection('posts').within(center,r,'position');
    //   })
    // );
    //this.postDoc =this.geo.collection('posts').within(center,100,'position');

    //this.postDoc.subscribe(console.log);

    const cities = this.geo.collection('posts');

    //  const point = this.geo.point(23.0524,72.6042);
    //cities.add({ position: point.data });
    //const center = this.geo.point(23.524828, 72.455577);
    //  let lat = position.coords.latitude;
    //  let lng = position.coords.longitude;
    //const center = this.geo.point(lat, lng);
    const center = this.geo.point(23.524828, 72.455577);
    const radius = 70;
    const field = 'position';
    const query = cities.within(center, radius, field);
    query.subscribe(a => a.forEach(a => console.log(a.content)));

  }


  





  // updateRadius(val){
  //   this.radius.next(val);
  // }

}
