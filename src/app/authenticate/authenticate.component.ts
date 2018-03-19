import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service'

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.css']
})
export class AuthenticateComponent implements OnInit {
  email;
  password;
  user$;
    
    
  constructor(private userService: UserService) { }

  ngOnInit() {
  }
    
  login(){
     this.user$ = this.userService.authenticate(this.email,this.password)
  }

}