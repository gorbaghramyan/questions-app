import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  GET_CATEGORIES = 'https://opentdb.com/api_category.php';
  categories$: Observable<Category[]>;

  constructor(private http: HttpClient) {
    this.categories$ = this.getCategories();
  }

  private getCategories(): Observable<Category[]> {
    return this.http.get(this.GET_CATEGORIES).pipe(
      map((data: any) => data.trivia_categories.map((category: Category) => new Category(category.id, category.name)))
    );
  }
}