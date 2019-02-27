import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
//import { switchMap } from 'rxjs/operators';
//import { MatChipInputEvent } from '@angular/material';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Post } from 'src/app/services/user';


@Component({
  selector: 'app-home-doctor',
  templateUrl: './home-doctor.component.html',
  styleUrls: ['./home-doctor.component.css'],
  providers: []
})
export class HomeDoctorComponent implements OnInit {

  postCollection: AngularFirestoreCollection<Post>;
  public posts: Post[];
  userId: string;
  userName: string;

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  tagLength: number;
  objectKeys = Object.keys;
  tags: {};
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  docId: string;


  constructor(private postService: PostService, public afs: AngularFirestore) {

  }

  ngOnInit() {
    this.postService.getPosts();
    setInterval(()=>{
      this.posts = this.postService.posts;
      this.userName = this.postService.userName;
     // this.postService.posts.forEach(post =>this.tags = post.tags);
    }
    ,4000)
  }


}



















































// this.authService.afAuth.auth.onAuthStateChanged(user => {
//   if (user) {
//     this.userId = user.uid;
//     this.userName = user.displayName;
//     // console.log(this.userId);
//     // console.log(user.displayName);
//     this.postCollection = this.afs.collection('posts', ref => {
//       return ref.where('author_id', '==', this.userId);
//     })
//     this.postCollection.snapshotChanges().subscribe((doc) => {
//       this.posts = doc.map(data => data.payload.doc);
//       console.log(this.posts.length);
//       this.posts.forEach(a=>{this.docId = a.ref.id;/*console.log(a.ref.id)*/});
//       setTimeout(() => {
//         console.log(this.docId);
//       }, 4000);
//     })


//   }
  
// });

// }



    // this.postService.getPosts();
    // this.posts = this.postService.postData;
    // console.log(this.posts);

    // console.log(this.postService.currentUserId);


    // this.authService.afAuth.auth.onAuthStateChanged(user => {
    //   if (user) {
    //     this.userId = user.uid;
    //     console.log(this.userId);
    //     this.postCollection =  this.afs.collection('posts', ref =>
    //     {
    //       return ref.where('author_id', '==',this.userId);
    //     })
    //     this.postCollection.valueChanges().subscribe(docs=>{
    //       this.posts =  docs;
    //       this.posts.forEach(post=>this.tags = post.tags);
    //       this.tagLength = this.tagLength;
    //       console.log(this.tagLength);
    //     })

    //   }
    // });