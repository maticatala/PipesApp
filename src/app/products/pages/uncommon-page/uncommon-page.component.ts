import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  // i18n Select
  public name: string = 'Fernando';
  public gender: 'male'|'female' = 'male';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla',
  }

  changeClient():void {
    this.name = 'Melissa';
    this.gender = 'female';
  }

  // i18 Plural
  public clients: string[] = ['Maria', 'Matias', 'Muriel', 'Eduardo', 'Hernan'];
  public clientsMap = {
    '=0': 'No tenemos ningun cliente esperando.',
    '=1': 'Tenemos # cliente esperando.',
    'other': 'Tenemos # clientes esperando.',
  }
  deleteClient():void {
    this.clients.shift();
  }

  // JSON
  public person = {
    name: 'Fernando',
    age: 36,
    addred: 'Argentina, Rosario'
  }

  // Async Pipe
  public myObservableTimer = interval(2000);

}
