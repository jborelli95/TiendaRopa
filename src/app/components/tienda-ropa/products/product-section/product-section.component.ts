import { Component } from '@angular/core';

@Component({
  selector: 'app-product-section',
  templateUrl: './product-section.component.html',
  styleUrl: './product-section.component.css'
})
export class ProductSectionComponent {

  /**Function to change display:none to flex or vice versa for showing the properties of the filter list*/
  change(id: string) {
    let element = document.getElementById(id);

    if (element?.classList.contains("d-flex")) {
      element?.classList.remove("d-flex");
      element?.classList.add("d-none");
      this.changeUpDownBtn(id);
    } else {
      element?.classList.remove("d-none");
      element?.classList.add("d-flex");
      this.changeUpDownBtn(id);
    }
  }

  changeUpDownBtn(id: string) {
    let btnUp = document.getElementById(id + "-up");
    let btnDown = document.getElementById(id + "-down");

    if (btnDown?.classList.contains("d-inline")) {
      btnDown?.classList.remove("d-inline");
      btnDown?.classList.add("d-none");
      btnUp?.classList.remove("d-none");
      btnUp?.classList.add("d-inline");
    } else {
      btnUp?.classList.remove("d-inline");
      btnUp?.classList.add("d-none");
      btnDown?.classList.add("d-inline");
      btnDown?.classList.remove("d-none");
    }
  }

}

/**https://stackoverflow.com/questions/65887254/how-to-change-a-value-in-css-using-typescript */




/**
 *     let htmlElement = document.getElementById(id) as HTMLElement;
    if(window.getComputedStyle(htmlElement).getPropertyValue("display") === "none"){
      htmlElement?.style.setProperty('display','flex');
      document.getElementById(id+"-down-btn")?.style.setProperty('display','none');
      document.getElementById(id+"-up-btn")?.style.setProperty('display','flex');
    }else{
      htmlElement?.style.setProperty('display','none');
      document.getElementById(id+"-down-btn")?.style.setProperty('display','flex');
      document.getElementById(id+"-up-btn")?.style.setProperty('display','none');
    }
 */



/**
 * let element = document.getElementById(id);

    let htmlElement = document.getElementById(id) as HTMLElement;
    console.log(window.getComputedStyle(htmlElement).getPropertyValue("display"));

    if(element?.classList.contains("d-flex")){
      element?.classList.remove("d-flex");
      element?.classList.add("d-none");
      this.changeUpDownBtn(id);
    }else{
      element?.classList.remove("d-none");
      element?.classList.add("d-flex");
      this.changeUpDownBtn(id);
    }
  }

  changeUpDownBtn(id:string){
    let btnUp = document.getElementById(id+"-up");
    let btnDown = document.getElementById(id+"-down");

    if(btnDown?.classList.contains("d-inline")){
      btnDown?.classList.remove("d-inline");
      btnDown?.classList.add("d-none");
      btnUp?.classList.remove("d-none");
      btnUp?.classList.add("d-inline");
    }else{
      btnUp?.classList.remove("d-inline");
      btnUp?.classList.add("d-none");
      btnDown?.classList.add("d-inline");
      btnDown?.classList.remove("d-none");
    }
  }
 */