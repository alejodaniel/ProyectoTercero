import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/CRUD/product.service';
import { Product } from '../../models/Product';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

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
