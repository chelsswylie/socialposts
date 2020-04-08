import { Component, OnInit } from '@angular/core';
import { Post } from '../interface/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  postList: Post[] = [
    // Post array above comes from the interface, postList is the variable
    {
      title: 'Grand Circus',
      thought: 'Grand Circus is cool.',
    },
    {
      title: 'Ritual',
      thought: 'Ritual is a well developed app.',
    },
    {
      title: 'Scott',
      thought: 'Scott rides scooters.',
    },
  ];
  // These need to be referenced in the interface

  constructor() {}

  ngOnInit(): void {}
}
