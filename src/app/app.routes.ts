import { Routes } from '@angular/router';
import { Login } from './core/login/login';
import { SignUp } from './core/sign-up/sign-up';
import { canmatchGuard } from './core/guard/canmatch-guard';
import { Navbar } from './core/layout/navbar/navbar';
import { UserProfile } from './core/layout/user-profile/user-profile';
import { Layout } from './core/layout/layout';
import { Sidebar } from './core/layout/sidebar/sidebar';


export const routes: Routes = [
 
    {path:"login",component:Login},
    {path:"signUp",component:SignUp},
        {path:"UserProfile",component:UserProfile},
    // /
     {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
    {
    path: 'navbar',
    pathMatch: 'full',
    component:Navbar
  },
  {
    path: 'sidebar',
    pathMatch: 'full',
    component:Sidebar
  },
   {
    path: 'layout',
    pathMatch: 'full',
    component:Layout
  },
  { canMatch: [canmatchGuard], path: 'login', component: Login },
];
