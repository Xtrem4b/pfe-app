import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';

import { AsyncLocalStorageModule } from 'angular-async-local-storage';


import { HttpClientModule }    from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatDialogModule} from '@angular/material/dialog';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';


import { AppComponent } from './app.component';

import { RecipeService } from './services/recipe.service';
import { IngredientService } from './services/ingredient.service';
import { UserService } from './services/user.service';

import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { AppRoutingModule } from './app-routing.module';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { IngredientListComponent } from './ingredient-list/ingredient-list.component';
import { IngredientLinkDialogComponent } from './ingredient-link-dialog/ingredient-link-dialog.component';
import { AuthenticateComponent } from './authenticate/authenticate.component';

import { UserProfileComponent } from './user-profile/user-profile.component';
import { RegisterComponent } from './register/register.component';
import { ProfilComponent } from './components/profil/profil.component';
import { ProfilModalComponent } from './components/profil-modal/profil-modal.component';
import { OpenfoodfactPortalComponent } from './components/openfoodfact-portal/openfoodfact-portal.component';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';



@NgModule({
  declarations: [
    AppComponent,
    RecipesListComponent,
    RecipeDetailComponent,
    IngredientListComponent,
    IngredientLinkDialogComponent,
    AuthenticateComponent,
    UserProfileComponent,
    RegisterComponent,
    ProfilComponent,
    ProfilModalComponent,
    OpenfoodfactPortalComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
       MatDialogModule,
    MatToolbarModule,
    MatButtonModule,

    AsyncLocalStorageModule,
          BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  entryComponents: [IngredientLinkDialogComponent,ProfilModalComponent],

  providers: [RecipeService,IngredientService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }


/*

    MatDialogModule,
    MatToolbarModule,
    MatButtonModule,
*/


