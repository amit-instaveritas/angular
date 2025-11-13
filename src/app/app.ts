import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from "./layouts/footer/footer";
import { Header } from './layouts/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App { }
