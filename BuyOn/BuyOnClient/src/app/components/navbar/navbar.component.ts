import { Router, NavigationEnd } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Profilepicture } from 'src/app/models/profile/Profilepicture';
import { UserService } from 'src/app/services/profile/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public pushRightClass: string;
  user: any;
  profileImg = 'assets/images/accounts.png';

  constructor(private router: Router, private userService: UserService) {
    this.router.events.subscribe(val => {
      if (
        val instanceof NavigationEnd &&
        window.innerWidth <= 992 &&
        this.isToggled()
      ) {
        this.toggleSidebar();
      }
    });
  }

  ngOnInit() {
    this.pushRightClass = 'push-right';

  }

  getUser() {
    this.userService.get(this.user.id).then(r => {
      this.user = r;
    }).catch(e => {

    });
  }

  isToggled(): boolean {
    const dom: Element = document.querySelector('body');
    return dom.classList.contains(this.pushRightClass);
  }

  toggleSidebar() {
    const dom: any = document.querySelector('body');
    dom.classList.toggle(this.pushRightClass);
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(['/inicio']);
  }

  refreshUser(): Boolean {
    if (JSON.parse(sessionStorage.getItem('user')) !== null) {
      this.user = JSON.parse(sessionStorage.getItem('user'));
    }
    if (JSON.parse(sessionStorage.getItem('profilePicture')) !== null) {
      const profilePicture = JSON.parse(sessionStorage.getItem('profilePicture')) as Profilepicture;
      this.profileImg = 'data:' + profilePicture.fileType + ';base64,' + profilePicture.file;
    }
    return true;
  }
}
