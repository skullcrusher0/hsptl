import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { MatChipInputEvent } from '@angular/material';
import { Post } from 'src/app/services/user';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { PostService } from 'src/app/services/post.service';
@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  
  
  postCollection :AngularFirestoreCollection<Post>;
  tags: Tag[] = [];



  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.tags.push({ name: value.trim() });
    }

    if (input) {
      input.value = '';
    }
  }

  remove(tag: Tag): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }
  constructor(private auth:AuthService ,private postService:PostService) { }

  ngOnInit() {
  }

}


export interface Tag {
  name: string;
}
