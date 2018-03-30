import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { AsyncLocalStorage } from 'angular-async-local-storage';


import { MAT_DIALOG_DATA } from '@angular/material';
import { Inject} from '@angular/core';

import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model: any = {};

  constructor(private userService: UserService, private router: Router, private activedRoute: ActivatedRoute,@Inject(MAT_DIALOG_DATA) public data: any,public dialogRef: MatDialogRef<RegisterComponent>,protected localStorage: AsyncLocalStorage) { }

  ngOnInit() {
  }
    
  register() {
     this.userService.register(this.model.email,this.model.password,this.model.login).subscribe(
            data => {
                this.userService.authenticate(this.model.email,this.model.password).subscribe(
                 data => {
                this.localStorage.setItem('user', data).subscribe(() => {
                    this.dialogRef.close(true);
                    this.router.navigate(['profil'])
                });
            },
            error => {
                switch (error.status){
                    case 412 :
                        console.log("Un des champs est vide")
                        break;
                    case 400 :
                        console.log(error.error)
                        break;
                    default:
                        console.log("erreur inconnue")
                        break;
                }
            }  
        )
        },
        error => {
            switch (error.status){
                case 412 :
                    console.log("Un des champs est vide")
                    break;
                case 400 :
                    console.log(error.error)
                    break;
                default:
                    console.log("erreur inconnue")
                    break;
            }
        }
      )
  }

    /*
  register() {
    this.userService.addUser(this.model);
    this.router.navigate(['profile']);
  }*/

}
