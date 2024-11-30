import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'  
})
export class UserLoginComponent implements OnInit {

  loginForm: FormGroup = this.fB.group({
    email:[""],
    password:[""]
  });

  constructor(
    private fB: FormBuilder
  ) { }

  ngOnInit() {
    
  }

  userLogIn(){
    
  }

}
