import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  standalone: false,
  templateUrl: './pagination.html',
  styleUrl: './pagination.css',
})
export class PaginationComponent {
  @Input() params: any = [];
  @Output() paginationEvent = new EventEmitter<number>();

  loadPage(page: number) {
    this.paginationEvent.emit(page);
  }
}
