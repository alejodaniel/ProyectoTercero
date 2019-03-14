import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/CRUD/product.service';
import { Product } from 'src/app/models/Product';
import { User } from 'src/app/models/profile/User';
import { environment } from 'src/environments/environment';
import { timingSafeEqual } from 'crypto';
import { Order } from 'src/app/models/Order';
import { OrderService } from 'src/app/services/CRUD/order.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})



export class CarritoComponent implements OnInit {
  id: any = null;
  product: Product;
  cantidad: any = 1;
  user: User;
  order: Order;
  products: Array<Product>;
  productsTemp: Array<Product>;
  constructor(private root: ActivatedRoute, private productService: ProductService, private orderService: OrderService) {
    this.id = this.root.snapshot.params['id'];
    this.product = new Product();
    this.order = new Order();
    this.productsTemp = new Array<Product>();
    this.user = new User();
    this.user = JSON.parse(sessionStorage.getItem('user'));

  }
  recuperarProducto() {

    this.productService.get()
      .then(r => {
        this.products = r as Array<Product>;
        environment.carritoCompras.forEach(a => {
          console.log('carrito ' + environment.carritoCompras.length);
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

    this.productsTemp.forEach(elementos => {
      this.orderService.post(elementos).then(r => {
        console.log(this.user.id, this.user.name, elementos.name, elementos.type, elementos.price);
      }).catch(e => {

      });
    })
    swal({
      title: 'Orden Eviada',
      text: 'Gracias por usar Buy-On',
      icon: 'success',
    })
  }

  ngOnInit() {
    console.log(environment.carritoCompras);
    this.recuperarProducto();
  }
}


