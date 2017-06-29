import { Component } from '@angular/core';
import { PostsService } from '../../../services/post/posts.service';

@Component({
  selector: 'user',
  templateUrl: '../../templates/user.component.template.html',
  providers: [ PostsService ]
})

export class UserComponent {
  first_name: string;
  last_name: string;
  email: string;
  address: address;
  hobbies: string[];
  showHobbies: boolean;
  posts: Post[];

  constructor(private postsService: PostsService) {
    this.first_name = 'Yovan';
    this.last_name = 'Juggoo';
    this.email = 'yovan@recruiter.com';
    this.address = {
      street: 'Recruiter Road',
      city: 'Ebene',
      district: 'Plaines Wilhems',
      country: 'Mauritius',
    };
    this.showHobbies = true;
    this.hobbies = ['Football', 'Gaming', 'Guitar'];
    this.postsService.getPosts().subscribe((posts: any) => {
        this.posts = posts;
    });
  }

  toggleHobbies() {
    this.showHobbies = !this.showHobbies;
  }

  addHobby(hobby: string) {
    this.showHobbies = true;
    this.hobbies.push(hobby)
  }

  deleteHobby(index: number) {
    this.hobbies.splice(index, 1);
  }

}

interface address {
  street: string;
  city: string;
  district: string;
  country: string;
}

interface Post {
  id: number;
  title: string;
  body: string;
}