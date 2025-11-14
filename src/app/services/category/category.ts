import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CategoryServices {
  constructor(private httpClient: HttpClient) { }

  getCategories(paginate: number) {
    return this.httpClient.get('http://127.0.0.1:8000/api/categories?page=' + paginate);
  }

  getCategoryById(id: string) {
    return this.httpClient.get('http://127.0.0.1:8000/api/categories/' + id);
  }
}
