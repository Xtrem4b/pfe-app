import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../models/user';
import { Observable } from 'rxjs/Observable';
import { AsyncLocalStorage } from 'angular-async-local-storage';

import { MAT_DIALOG_DATA } from '@angular/material';
import { Inject} from '@angular/core';

import {MatDialogRef} from '@angular/material';





@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.css']
})
export class AuthenticateComponent implements OnInit {
  model: any = {};
  user$: any;


  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router,protected localStorage: AsyncLocalStorage,@Inject(MAT_DIALOG_DATA) public data: any,public dialogRef: MatDialogRef<AuthenticateComponent>) { }

  ngOnInit() {
      this.localStorage.removeItem('user').subscribe(() => {});
      this.localStorage.removeItem('profil').subscribe(() => {});

  }

  login() {
     this.userService.authenticate(this.model.email, this.model.password).subscribe( 
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
  }

  register() {
    this.router.navigate(['register']);
  }
}
