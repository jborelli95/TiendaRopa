import { Component } from '@angular/core';

@Component({
  selector: 'app-garment',
  templateUrl: './garment.component.html',
  styleUrl: './garment.component.css'
})
export class GarmentComponent {

  shopQuantity:number = 1;

  addQuant(){
      this.shopQuantity++;
  }

  subtractQuant(){
    if(this.shopQuantity > 1){
      this.shopQuantity--;
    }
  }
}
