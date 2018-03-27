import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.css']
})
export class AuthenticateComponent implements OnInit {
  email;
  password;
  user$;


  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  login() {
     this.user$ = this.userService.authenticate(this.email, this.password)
     .map(data => {
       this.router.navigate(['profile']);
     });
  }

  register() {
    this.router.navigate(['register']);
  }
}
