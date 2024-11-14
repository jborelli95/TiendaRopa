import { Component } from '@angular/core';
import { PasswordService } from '../../../services/password.service';
import { environment } from '../../../../environments/environment.development';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  text: string = "";


  constructor(
    private passwordService: PasswordService
  ) { }

  test() {
    alert(this.text);
    let encryptData = this.passwordService.encryptData(this.text, environment.cryptKey);
    console.log("Data encriptada: "+ encryptData);
    let decryptData = this.passwordService.decryptData(encryptData, environment.cryptKey);
    console.log("Data desencriptada: "+ decryptData);
  }
}
