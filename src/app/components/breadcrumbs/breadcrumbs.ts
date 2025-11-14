import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-breadcrumbs',
  standalone: false,
  templateUrl: './breadcrumbs.html',
  styleUrl: './breadcrumbs.css',
})
export class BreadcrumbsComponent {
  @Input() message!: string;
}
