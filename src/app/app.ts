import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/layouts/header/header';
import { FooterComponent } from './components/layouts/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, NgIf],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent implements OnInit {
  isLoginPage = false;
  isRegisterPage = false;

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const route = event.urlAfterRedirects;
        this.isLoginPage = route === '/login';
        this.isRegisterPage = route === '/register';
      }
    });
  }
}
