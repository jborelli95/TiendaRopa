import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../../../../interfaces/interfaces';
import { DatePipe } from '@angular/common';
import { PasswordService } from '../../../../services/password.service';
import { environment } from '../../../../../environments/environment.development';
import { UserService } from '../../../../services/user.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrl: './user-register.component.css'
})
export class UserRegisterComponent implements OnInit {

  registerForm: FormGroup = this.formBuilder.group({
    username: [""],
    password: [""],
    password2: [""],
    name: [""],
    surname: "",
    country: "",
    state: "",
    city: "",
    email: "",
    startedDate: ""
  })

  ngOnInit(): void {

  }

  constructor(
    private formBuilder: FormBuilder,
    private datePipe: DatePipe,
    private passwordService: PasswordService,
    private userSerivce: UserService
  ) { }

  test() {
    
  }

  userRegister() {
    const user:User = {
      username: this.registerForm.controls["username"].value,
      password: this.passwordService.encryptData(this.registerForm.controls["password"].value, environment.cryptKey),
      name: this.registerForm.controls["name"].value,
      surname: this.registerForm.controls["surname"].value,
      email: this.registerForm.controls["email"].value,
      city: this.registerForm.controls["city"].value,
      state: this.registerForm.controls["state"].value,
      country: this.registerForm.controls["country"].value,
      startedDate: this.datePipe.transform(new Date(), 'dd-MM-yyyy HH:mm:ss'),
      id: "0"
    }

    console.log(user);
    
  }

}
