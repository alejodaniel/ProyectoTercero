import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/CRUD/product.service';
import { Product } from 'src/app/models/Product';
import { User } from 'src/app/models/profile/User';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})



export class CarritoComponent implements OnInit {
  id: any = null;
  product: Product;
  user: User;
  products: Array<Product>;
  productsTemp: Array<Product>;
  constructor(private root: ActivatedRoute, private productService: ProductService) {
    this.id = this.root.snapshot.params['id'];
    this.product = new Product();
    this.productsTemp = new Array<Product>();
    this.user = new User();
    this.user = JSON.parse(sessionStorage.getItem('user'));
    
  }
  recuperarProducto() {

    this.productService.get()
      .then(r => {
        this.products = r as Array<Product>;
        environment.carritoCompras.forEach(a => {
          console.log('carrito '+environment.carritoCompras.length);
          this.products.forEach(b => {
            if (a == b.id) {
              console.log(b);
              this.productsTemp.push(b);
            }

          });

        });

      }
      ).catch(e => {

      });


  }

  guardarProducto() {

  }

  ngOnInit() {
console.log(environment.carritoCompras);
 this.recuperarProducto();
  }
}
