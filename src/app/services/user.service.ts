import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/interfaces';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  urlUsers: string = environment.baseUrlDb.concat("/users");

  constructor(
    private http:HttpClient
  ) { }

  /**Post con fetch */
  
}
