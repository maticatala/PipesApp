import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: [
  ]
})
export class OrderComponent {
  public isUpperCase: boolean = false;

  public sortBy?: keyof Hero;

  public heroes: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.blue,
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black,
    },
    {
      name: 'Flash',
      canFly: false,
      color: Color.red,
    },
    {
      name: 'Iroman',
      canFly: true,
      color: Color.red,
    },
    {
      name: 'Green Lantern',
      canFly: true,
      color: Color.green,
    },
  ]

  changeOrder( value: keyof Hero ): void {
    this.sortBy = value;
  }

  toggleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }
}
