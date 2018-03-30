import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { AsyncLocalStorage } from 'angular-async-local-storage';

import { Location } from '@angular/common';
import { MatDialog } from '@angular/material';

import { AuthenticateComponent } from './authenticate/authenticate.component'
import { RegisterComponent } from './register/register.component'

import { ProfilModalComponent } from './components/profil-modal/profil-modal.component';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  user$ : any;
isConnected : any;
    constructor(protected localStorage: AsyncLocalStorage,private location: Location, public dialog: MatDialog) {}
    
    ngOnInit() {
        this.localStorage.getItem("user").subscribe(data => {this.isConnected = (data)
        this.user$ = data || null
        })
    }
    
    openRegister():void{
        let dialogRef = this.dialog.open(RegisterComponent, {
            height: '500px',
            width: '500px',
            data: {}
        });
        dialogRef.afterClosed().subscribe(result => {
            this.isConnected = result;
            this.localStorage.getItem("user").subscribe(data =>
                this.user$ = data)
        });
    }
    
    openDialog():void{
        let dialogRef = this.dialog.open(AuthenticateComponent, {
            height: '500px',
            width: '500px',
            data: {connected: this.isConnected }
        });
        dialogRef.afterClosed().subscribe(result => {
            this.isConnected = result;
            this.localStorage.getItem("user").subscribe(data =>
                this.user$ = data)
        });

    }
    
    openUpdateProfil():void{
     let dialogRef = this.dialog.open(ProfilModalComponent, {
            height: '500px',
            width: '500px',
            data: this.user$
        });
        dialogRef.afterClosed().subscribe(result => {
            this.user$ = result;
        });   
    }
    
    logout():void{
      this.localStorage.removeItem('user').subscribe(() => {});
      this.localStorage.removeItem('profil').subscribe(() => {});
        this.isConnected = false
    }
    
}


