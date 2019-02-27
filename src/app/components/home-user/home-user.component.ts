import { Component, OnInit } from '@angular/core';
//import { PostService } from 'src/app/services/post.service';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Post } from 'src/app/services/user';
//import { AuthService } from 'src/app/services/auth.service';
//import { AngularFirestore, AngularFirestoreCollection, QueryDocumentSnapshot } from '@angular/fire/firestore';
//import { Post } from 'src/app/services/user';
//import * as firebase from 'firebase';




@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.css']
})


export class HomeUserComponent implements OnInit {
  postCollection :AngularFirestoreCollection<Post>;
  // doctorCollection :AngularFirestoreCollection<Doctor>;
   //public posts: QueryDocumentSnapshot<any>[];
   userId:string;
   userName:string;
   posts: Post[];
  // postCollection: AngularFirestoreCollection<Post>;
  // posts: QueryDocumentSnapshot<any>[];
 // userId:string;
  //public authService: AuthService, public afs: AngularFirestore
  constructor(public authService :AuthService , public afs :AngularFirestore) { }

  ngOnInit(){

    // this.authService.afAuth.auth.onAuthStateChanged(user => {
    //   if (user) {
    //     this.userId = user.uid;
    //     console.log(this.userId);
    //     this.postCollection =  this.afs.collection('posts', ref =>
    //      {
    //       return ref.where('author_id', '==',this.userId);
    //      })
    //      this.postCollection.snapshotChanges().subscribe((doc)=>{
    //       this.posts = doc.map(data=>data.payload.doc);
    //     })
    //   }
    // });
    this.authService.afAuth.auth.onAuthStateChanged(user => {
      if (user) {
        this.userId = user.uid;
        console.log(this.userId);
        this.postCollection =  this.afs.collection('posts', ref =>
        {
          return ref.where('author_id', '==',this.userId);
        })
        this.postCollection.valueChanges().subscribe(docs=>{
          this.posts =  docs;
          //  this.posts.forEach(post=>this.tags = post.tags);
         // this.tagLength = this.tagLength;
         // console.log(this.tagLength);
        })

      }
    });
    
  }
}



