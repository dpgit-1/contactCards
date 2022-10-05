import { Component } from '@angular/core';
import { Contact } from './contact';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'contactCards';
  newContact: Contact = {} as Contact;
  contacts: Contact[] = [];

  //methods
  addContact(): void{
    this.contacts.push(Object.assign({}, this.newContact));
  }
}
