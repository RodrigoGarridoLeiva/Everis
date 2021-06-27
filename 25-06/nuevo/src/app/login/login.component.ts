import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  cuser="user";
  cpass="user";

  alertUser!:string;

  constructor(private router: Router) {}

    user=new FormControl('');
    pwd=new FormControl('');
   
  ngOnInit(): void {
  }

  validar(){


    if(this.user.value == this.cuser){
      this.alertUser = "";
    }else{
      this.alertUser= "Usuario o Password Incorrecto";
    }
    if(this.pwd.value == this.cpass){
      this.alertUser = "";
    }else{
      this.alertUser= "Usuario o Password Incorrecto";
    }
    if(this.alertUser==""){
      this.router.navigate(['productos']);
    }

  }

}
