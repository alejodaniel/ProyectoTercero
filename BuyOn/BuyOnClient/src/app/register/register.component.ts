import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  name: String = '';
  surname: String = '';
  email: String = '';
  pass: String = '';
  passConfirm: String = '';
  busy: Promise<any>;
  esperando: Boolean;

  constructor(private router: Router, private authDataServise: AuthService) { }

  ngOnInit() {
    this.name = '';
    this.surname = '';
    this.email = '';
    this.pass = '';
    this.passConfirm = '';
    this.esperando = false;
  }

  registrar() {
    if (this.pass !== this.passConfirm) {
      swal({
        title: 'Error contraseñas no coinciden',
        text: 'Vuelve a ingresar las contraseñas',
        icon: 'error',
      });
    } else {

      if (!this.esperando) {
        this.esperando = true;
        this.busy = this.authDataServise.register(this.name, this.surname, this.email, this.pass).then(r => {
          this.esperando = false;
          swal({
            title: 'Te damos la bienvenida',
            text: 'Disfruta de Nuestra Pagina',
            icon: 'success',
          })
            .then(response => {
              this.name = '';
              this.surname = '';
              this.email = '';
              this.router.navigate(['/login']);
            });
        }).catch(e => {
          this.esperando = false;
          console.log(e);
        });
      }
    }
  }
}
