import { Component, Input, OnInit ,Output} from '@angular/core';
import { AutherisationService } from '../autherization.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input() Cart:any = [];
  public products : any = [];
  public grandTotal !: number;
  constructor(private cartService : AutherisationService) { }

  ngOnInit(): void {
    console.log(this.Cart);
    
    this.cartService.getProducts()
    
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    })
  }
  removeItem(item: any){
    this.cartService.removeCartItem(item);
  }
  emptycart(){
    this.cartService.removeAllCart();
  }
}
