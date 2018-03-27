import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { RegisterComponent } from './register/register.component';
import { BarCodeComponent } from './bar-code/bar-code.component';


const routes: Routes = [
    {path: '', redirectTo: '/recipes', pathMatch: 'full'},
    {path: 'recipes', component: RecipesListComponent},
    {path: 'recipe/:id', component: RecipeDetailComponent},
    {path: 'login', component: AuthenticateComponent},
    {path: 'profile', component: UserProfileComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'bar-code', component: BarCodeComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
