import { Component, OnInit, Output } from '@angular/core';
import { Post } from '../interface/post';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css'],
})
export class PostFormComponent implements OnInit {
  addtoList: Post[] = [
    // Post array above comes from the interface, addtoList is the variable
    {
      title: '',
      thought: '',
    },
  ];
  @Output() handlePosts: EventEmitter<any> = new EventEmitter();

  addPost = (newPost) => {
    this.addtoList.push({
      title: '',
      thought: '',
    });
  };

  constructor() {}

  ngOnInit(): void {}
}
