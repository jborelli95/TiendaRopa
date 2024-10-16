import { Component } from '@angular/core';

@Component({
  selector: 'app-product-section',
  templateUrl: './product-section.component.html',
  styleUrl: './product-section.component.css'
})
export class ProductSectionComponent {

  change(id:string){
    console.log(document.getElementById(id));
    console.log("id es:" +id);
  }
}
/**https://stackoverflow.com/questions/65887254/how-to-change-a-value-in-css-using-typescript */