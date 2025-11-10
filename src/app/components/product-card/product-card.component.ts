import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../../interfaces/product.interface';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.less']
})
export class ProductCardComponent {
  @Input() product!: Product;
  @Output() productAdded = new EventEmitter<string>();

  constructor(private cartService: CartService) {}

  onAddToCart(): void {
    this.cartService.addToCart(this.product);
    this.productAdded.emit(this.product.title);
  }
}
