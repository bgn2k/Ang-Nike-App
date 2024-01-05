import { Component } from '@angular/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  navBar : string[] = [
    "Home",
    "Products",
    "Sale",
    "New Arrivals",
    "Contacts",
    "Services"
  ]

}
