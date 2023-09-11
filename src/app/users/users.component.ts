import {Component, OnInit} from '@angular/core';
import {ApiService} from "../api.service";
import {Router} from '@angular/router';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: any[] = [];

  constructor(private apiService: ApiService, private router: Router) {

  }

  ngOnInit(): void {
    this.apiService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }

  async goToDetails(userId: number) {
    await this.router.navigate([`/user/${userId}`])
  }
}
