import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SlidesComponent } from './slides/slides.component';

import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  {
<<<<<<< HEAD
    path: '',
    component: SlidesComponent,
||||||| 594dce8
    path: 'slides',
    component: SlidesComponent,
=======
    path: '',
    component: SlidesComponent
>>>>>>> 793c6e1e56b9055ff2a2b339c9e1b6bd93857f60
  },
  // {
  //   path: 'slides',
  //   component: SlidesComponent,
  // },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'header',
    component: HeaderComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
