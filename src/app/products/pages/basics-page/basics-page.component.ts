import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {
  public nameLowercase: string = 'Fernando';
  public nameUppercase: string = 'FERNANDO';
  public fullName : string = 'fErnANdo HErreRa';

  public customDate: Date = new Date();
}
