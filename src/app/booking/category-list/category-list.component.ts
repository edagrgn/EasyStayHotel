import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Category } from '../../model/category.model';
import { CategoryRepository } from '../../model/category.repository';


@Component({
  selector: 'category-list',
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.scss'
})
export class CategoryListComponent implements OnInit{



  public selectedCategory: Category | null | undefined= null;

  @Output() categorys= new EventEmitter<Category>();

  constructor(private categoryRepository: CategoryRepository){}

  get category(): Category[]{
    return this.categoryRepository.getCategories();
}
ngOnInit() {
    
}

changeCategory(newCategory? : Category ){
  this.selectedCategory= newCategory;
  this.categorys.emit(newCategory);
}
}
