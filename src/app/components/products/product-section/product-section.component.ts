import { Component } from '@angular/core';

@Component({
  selector: 'app-product-section',
  templateUrl: './product-section.component.html',
  styleUrl: './product-section.component.css'
})
export class ProductSectionComponent {

  /**Function to change display:none to flex or vice versa for showing the properties of the filter list*/
  change(id:string){
    let htmlElement = document.getElementById(id) as HTMLElement;

    if(window.getComputedStyle(htmlElement).getPropertyValue("display") === "none"){
      htmlElement?.style.setProperty('display','flex');
      document.getElementById(id+"-down-btn")?.style.setProperty('display','none');
      document.getElementById(id+"-up-btn")?.style.setProperty('display','flex');

    }else{
      htmlElement?.style.setProperty('display','none');
      document.getElementById(id+"-down-btn")?.style.setProperty('display','flex');
      document.getElementById(id+"-up-btn")?.style.setProperty('display','none');
    }
  }
}
/**https://stackoverflow.com/questions/65887254/how-to-change-a-value-in-css-using-typescript */