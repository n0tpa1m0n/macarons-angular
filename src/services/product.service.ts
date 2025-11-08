import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getProducts(): Product[] {
    return [
      {
        image: '1.png',
        title: 'Макарун с малиной',
        description: '1 шт.',
        price: 1.70
      },
      {
        image: '2.png',
        title: 'Макарун с манго',
        description: '1 шт.',
        price: 1.70
      },
      {
        image: '3.png',
        title: 'Пирог с ванилью',
        description: '1 шт.',
        price: 1.70
      },
      {
        image: '4.png',
        title: 'Пирог с фисташками',
        description: '1 шт.',
        price: 1.70
      }
    ];
  }
}
