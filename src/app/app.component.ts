import { Component } from '@angular/core';
import { ProductService } from './../services/product.service';
import { CartService } from './../services/cart.service';
import { Product } from './../interfaces/product.interface';
import { Advantage } from './components/advantage/advantage.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  public showCart: boolean = true;
  public phoneNumber: string = '375293689868';
  public instagramLink: string = 'https://instagram.com/your_profile';

  public cards: Advantage[] = [
    {
      text: "1",
      title: 'Лучшие продукты',
      description: 'Мы честно готовим макаруны только из натуральных и качественных продуктов. Мы не используем консерванты, ароматизаторы и красители.'
    },
    {
      text: "2",
      title: 'Много вкусов',
      description: 'Наша задача – предоставить вам широкое разнообразие вкусов. Вы удивитесь, но у нас более 70 вкусов пироженок.'
    },
    {
      text: "3",
      title: 'Бисквитное тесто',
      description: 'Все пирожные готовятся на бисквитном тесте с качественным сливочным маслом 82,5%. В составе нет маргарина и дрожжей!'
    },
    {
      text: "4",
      title: 'Честный продукт',
      description: 'Вкус, качество и безопасность наших пирогов подтверждена декларацией о соответствии, которую мы получили 22.06.2016 г..'
    },
  ];

  public items: Product[] = [];

  constructor(
    private productService: ProductService,
    public cartService: CartService
  ) {
    this.items = this.productService.getProducts();
  }

  public onProductAdded(productName: string): void {
    alert(`${productName} добавлен в корзину!`);

    this.selectProduct(productName);
  }

  public scrollTo(target: HTMLElement): void {
    target.scrollIntoView({behavior: "smooth"});
  }

  public selectProduct(productName: string): void {
    const inputElement = document.getElementById('input1') as HTMLInputElement;
    if (inputElement) {
      inputElement.value = productName.toUpperCase();
    }

    const orderElement = document.querySelector('.order') as HTMLElement;
    if (orderElement) {
      orderElement.scrollIntoView({behavior: "smooth"});
    }
  }
}
