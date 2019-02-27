import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Post ,Event } from "../services/user";
import { AuthService } from 'src/app/services/auth.service';
import { AngularFireAuth } from "@angular/fire/auth";


@Injectable({
  providedIn: 'root'
})
export class PostService {
  postCollection: AngularFirestoreCollection<Post>;

  //  postDoc: AngularFirestoreDocument<Post>;
  public posts: Post[];
  public events
  userId: string;
  userName: string;
  // currentUser:Observable<firebase.User>;
  // postData: new Subject<Post[]>;
  //authState: any;


  constructor(public afs: AngularFirestore, public authService: AuthService, public afAuth: AngularFireAuth) {
    this.setUserId();
  }
  setUserId(){
    this.authService.afAuth.auth.onAuthStateChanged(s => { this.userId = s.uid, this.userName = s.displayName })
  }

  getPosts() {

    setTimeout(() => {
      console.log(this.userId);
      this.postCollection = this.afs.collection('posts', ref => ref.where('author_id', '==', this.userId));
      this.postCollection.snapshotChanges().subscribe((doc) => {
        this.posts = doc.map(data => {
          return data.payload.doc.data();
        });
      })
    }, 3000)
  }

  
  getEvents() {
    setTimeout(() => {
    //
    }, 3000)
  }




  createPost(inputData:any) {
    const data:Post ={ 
      author_id: this.userId,
      title:inputData.title,
      content: inputData.content,
    }
    this.afs.collection('posts').ref.add(data)
    .then(()=>console.log("posted SuccessFlly"))
    .catch((error)=>console.log(error.message))
  }

  createEvent(inputData:any){
    const data : Event={ 
     // author_id:this.userId,
      title:inputData.title,
      content:inputData.content
    }
    this.afs.collection('events').ref.add(data).then(()=>console.log("event posted SuccessFlly"))
  }
}















































// getPosts() {
  //   this.authService.afAuth.auth.onAuthStateChanged(user => {
  //     if (user) {
  //       this.userId = user.uid;
  //       console.log(this.userId);
  //       this.postCollection = this.afs.collection('posts', ref => ref.where('author_id', '==', this.userId));
  //       return this.postCollection.snapshotChanges().pipe(map(action => {
  //         this.postData = action;
  //         return action.map(a => {
  //           this.postData = a.payload.doc.data() as Post;

  //           const id = a.payload.doc.id;
  //           return { id, ...data };
  //         })
  //       }))
  //     }
  //   });

  //   // }















//   // getPosts(){
//   //   this.authService.afAuth.auth.onAuthStateChanged(user => {
//   //     if (user) {
//   //       this.userId = user.uid;
//   //       console.log(this.userId);
//   //       this.postCollection =  this.afs.collection('posts', ref =>
//   //       {
//   //         return ref.where('author_id', '==',this.userId);
//   //       })
//   //       
//   //       this.postCollection.valueChanges().subscribe(docs=>{
//   //         this.postData =  docs;
//   //       })
//   //     }
//   //   });
//   //   //console.log(this.posts);
//   // }