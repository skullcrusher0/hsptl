import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  events:any;
  constructor(private postService: PostService) {

   }

  ngOnInit() {
    
    this.postService.getEvents();
    setInterval(()=>{
      this.events = this.postService.events;
      //console.log(this.events);
    }
    ,4000)
  }

}
