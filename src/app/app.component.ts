import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  public showPresent: boolean = true;
  public phoneNumber: string = '+375 (29) 368-98-68';
  public instagramLink: string = 'https://instagram.com/your_profile';

  public cards = [
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

  public items = [
    {
      image: '1.png',
      title: 'Макарун с малиной',
      description: '1 шт. 1,70 руб.',
    },
    {
      image: '2.png',
      title: 'Макарун с манго',
      description: '1 шт. 1,70 руб.',
    },
    {
      image: '3.png',
      title: 'Пирог с ванилью',
      description: '1 шт. 1,70 руб.',
    },
    {
      image: '4.png',
      title: 'Пирог с фисташками',
      description: '1 шт. 1,70 руб.',
    },
  ];

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
