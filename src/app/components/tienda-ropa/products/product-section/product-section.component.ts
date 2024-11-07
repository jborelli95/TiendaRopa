import { Component } from '@angular/core';

@Component({
  selector: 'app-product-section',
  templateUrl: './product-section.component.html',
  styleUrl: './product-section.component.css'
})
export class ProductSectionComponent {

  /**Function to change display:none to flex or vice versa for showing the properties of the filter list*/
  change(id:string){
    let element = document.getElementById(id);

    if(element?.classList.contains("d-flex")){
      element?.classList.remove("d-flex");
      element?.classList.add("d-none");
    }else{
      element?.classList.remove("d-none");
      element?.classList.add("d-flex");
    }
  }
}
/**https://stackoverflow.com/questions/65887254/how-to-change-a-value-in-css-using-typescript */