import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './services/product.service';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductCategoryMenuComponent } from "./components/product-category-menu/product-category-menu.component";
import { SearchComponent } from "./components/search/search.component";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CartStatusComponent } from "./components/cart-status/cart-status.component";
import { UcuzAlFormService } from './services/ucuz-al-form.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductListComponent, HttpClientModule, RouterModule, ProductCategoryMenuComponent, SearchComponent, NgbModule, CartStatusComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [ProductService, UcuzAlFormService]
})
export class AppComponent {
  title = 'ucuzal-ui';
}
