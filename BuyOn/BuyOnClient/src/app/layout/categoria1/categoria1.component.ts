import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/CRUD/product.service';
import { Product } from '../../models/Product';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-categoria1',
  templateUrl: './categoria1.component.html',
  styleUrls: ['./categoria1.component.scss']
})
export class Categoria1Component implements OnInit {
  
  listProducts: any = [];
  product: Product;
  prueba = [];

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

  agregarItem(id:number){
environment.carritoCompras.push(id);
  }
}
