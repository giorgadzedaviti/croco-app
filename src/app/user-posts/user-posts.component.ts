import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css']
})

export class UserPostsComponent implements OnInit {
  userPosts: any[] = [];

  constructor(private ApiService: ApiService, private route: ActivatedRoute, private router: Router) {

  }

  userId: any;
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.userId = +params.get('id')!
      this.ApiService.getUserPosts(this.userId).subscribe((data) => {
        this.userPosts = data
      })
    })
  }

  async goBack() {
    await this.router.navigate([`/user/${this.userId}`])
  }
}
