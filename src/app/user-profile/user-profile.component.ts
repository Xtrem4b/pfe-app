import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  users: User[] = [];
  currentUser: User;

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getUsers();
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  getUsers(): void {
    this.userService.getUsers()
    .subscribe(users => this.users = users);
  }

  logout(): void {
    this.userService.logout();
    this.router.navigate(['login']);
  }

  update() {
    this.userService.updateUser(this.currentUser);
  }

}
