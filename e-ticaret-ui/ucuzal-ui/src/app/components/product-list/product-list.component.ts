import { Component } from '@angular/core';
import { Product } from '../../common/product';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [RouterModule, CommonModule, NgbModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  products: Product[] = [];
  currentCategoryId: number = 10;
  searchMode: boolean = false;

  previousCategoryId: number = 1;
  thePageNumber: number = 1;
  thePageSize: number = 5;
  theTotalElements: number = 0;
  previousKeyword: string = "";

  constructor(private productService: ProductService, private root: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.root.paramMap.subscribe(() => { 
      this.listProducts();
    })
  }

  listProducts() {
    this.searchMode = this.root.snapshot.paramMap.has('keyword');
    if (this.searchMode) {
      this.handleSearchProducts();
    } else {
      this.handleListProducts();
    }
  }

  handleSearchProducts() {
    const theKeyword: string = this.root.snapshot.paramMap.get('keyword')!;
    if(this.previousKeyword != theKeyword) {
      this.thePageNumber = 1;
    }
    this.previousKeyword = theKeyword;

    this.productService.searchProductPaginate(this.thePageNumber-1, this.thePageSize, theKeyword)
      .subscribe(
        this.processResult()
      ) 
  }

  processResult() {
    return (data: any) => {
      this.products = data._embedded.products;
      this.thePageNumber = data.page.number + 1;
      this.thePageSize = data.page.size;
      this.theTotalElements = data.page.totalElements;
    }
  }
  
  handleListProducts() {
    const hasCategoryId: boolean = this.root.snapshot.paramMap.has('id');
    if (hasCategoryId) {
      this.currentCategoryId = +this.root.snapshot.paramMap.get('id')!;
    } else {
      this.currentCategoryId = 10;
    }

    if (this.previousCategoryId != this.currentCategoryId) {
      this.thePageNumber = 1;
    }

    this.previousCategoryId = this.currentCategoryId;

    this.productService.getProductListPaginate(this.thePageNumber-1, this.thePageSize, this.currentCategoryId)
      .subscribe(
        this.processResult()      
      )
  }

  updatePageSize(pageSize: string) {
      this.thePageSize = +pageSize;
      this.thePageNumber = 1;
      this.listProducts();
  }
}
