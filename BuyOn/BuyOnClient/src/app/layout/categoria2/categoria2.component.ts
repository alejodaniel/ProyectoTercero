import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/CRUD/product.service';
import { Product } from '../../models/Product';

@Component({
  selector: 'app-categoria2',
  templateUrl: './categoria2.component.html',
  styleUrls: ['./categoria2.component.scss']
})
export class Categoria2Component implements OnInit {
  listProducts: any = [];
  product: Product;

  constructor(private productServices: ProductService) {
    this.getProducts();
    this.product = new Product();
  }

  ngOnInit() {
  }

  getProducts() {

    this.productServices.get().then(r => {
      this.listProducts = r;
    }).catch(e => {

    });
  }

  saveProducts() {
    this.productServices.post(this.product).then(r => {
      this.getProducts();
    }).catch(e => {

    });
  }

  agregarCarrito(id) {
    alert(id);
  }
}
