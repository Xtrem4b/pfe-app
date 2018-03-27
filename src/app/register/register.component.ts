import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model: any = {};

  constructor(private userService: UserService, private router: Router, private activedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  register() {
    this.userService.addUser(this.model);
    this.router.navigate(['profile']);
  }

}
