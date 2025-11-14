import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  standalone: false,
  templateUrl: './page-not-found.html',
  styleUrls: ['./page-not-found.css'],
})
export class PageNotFoundComponent {
  title() {
    return 'Page Not Found';
  }
}
