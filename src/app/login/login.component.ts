import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: ``
})
export class LoginComponent implements OnInit {
  user=new User();
  erreur: number =0;
  
  constructor(private authService : AuthService,
    private router: Router){}
    onLoggedin(){
  // console.log(this.user);
 let isValidUser: Boolean = this.authService.SignIn(this.user);
if (isValidUser)
    this.router.navigate(['/']);
else
    this.erreur=1;

  }
  ngOnInit(): void {

  }

}
