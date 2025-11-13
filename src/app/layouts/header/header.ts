import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import Module from 'module';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule, NgFor],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  logo = 'MyApp';

  phoneNumber = '123-456-7890';
  emailAddress = 'amitkumarkesharwani98@instaveritas.com';

  menuItems: string[] = ['Home', 'Counter', 'Color Picker', 'Products', 'Categories'];
}
