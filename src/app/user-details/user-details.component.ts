import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ApiService} from '../api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  userId!: number;
  user: any = {}

  constructor(
    private route: ActivatedRoute,
    private ApiService: ApiService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.userId = +params.get('id')!;
      this.ApiService.getUsers().subscribe((data) => {
        this.user = data.find((u: any) => u.id === this.userId)
      })
    })
  }

  async viewUsersPosts(){
    await this.router.navigate([`/user/${this.userId}/posts`])
  }

  async goBack() {
    await this.router.navigate([`/users`])
  }
}
