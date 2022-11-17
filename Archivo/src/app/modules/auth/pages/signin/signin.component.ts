import { Component, OnInit } from '@angular/core';
import { UserLogin } from '../../types/user';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
})
export class SigninComponent implements OnInit {
  user: UserLogin = {
    email: '',
    password: '',
  };

  session: any = {
    logged: false,
  };

  logoPath: string = '../../../../../assets/img/utez.png';
  get isLoading(){
    return this.authService.loading;
  }

  constructor(private authService: AuthService, private router: Router) {
    this.session.logged = localStorage.getItem("token")? true: false;
  }

  ngOnInit(): void {
    if(this.session.logged){
      this.router.navigateByUrl('/');
    }
  }

  signin() {
    this.authService.signin(this.user);
    
  }
}
