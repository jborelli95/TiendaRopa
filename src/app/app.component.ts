import { Component, isDevMode, OnInit } from '@angular/core';
import { environment } from '../environments/environment.development';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  ngOnInit(): void {
    
    if(isDevMode()){
      console.log('Development!');
    } else {
      console.log('Production!');
    }
  }

  title = 'TiendaRopa';
}
