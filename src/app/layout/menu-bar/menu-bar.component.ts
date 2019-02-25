import { Component, OnInit } from '@angular/core';
import { IMenu } from '../interfaces/IMenu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {
  menuIcons: IMenu[] = [
    {name: 'Menu', icon: 'assets/coffee.png', iconActive: 'assets/coffee-color.png', active: false},
    {name: 'Order', icon: 'assets/order.png', iconActive: 'assets/order-color.png', active: false},
    {name: 'User', icon: 'assets/user.png', iconActive: 'assets/user-color.png', active: false}
  ];
  constructor(private router: Router) {}

  ngOnInit() {
  }

  onTapMenuIcon(menu: IMenu) {
    this.menuIcons.forEach(item => {
      item.active = false;
    });
    menu.active = true;
    if (menu.name === 'Menu') {
      this.router.navigate(['/table']);
    }
    if (menu.name === 'Order') {
      this.router.navigate(['/tables']);
    }
    if (menu.name === 'User') {
      this.router.navigate(['/profile/info']);
    }
  }
}
