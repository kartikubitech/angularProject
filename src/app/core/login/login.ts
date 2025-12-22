import { Component, signal } from '@angular/core';
import { Field, form } from '@angular/forms/signals';
import { Router } from '@angular/router';
interface LoginData {
  email: string
  password: string
}
@Component({
  selector: 'app-login',
  imports: [Field],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  
loginModel = signal<LoginData>({
    email: '',
    password: ''
  })
  loginForm = form(this.loginModel)


  save(){
    console.log(this.loginForm());
    
  }

 
  
  
  constructor(private route: Router) {
     localStorage.setItem('isLogin', 'true');
  }
 
  register() {
    // this.route.navigate(['/signUp']);
    this.route.navigate(['/layout']);
  }
}
