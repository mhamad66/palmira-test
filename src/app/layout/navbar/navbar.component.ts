import {Component} from '@angular/core';
import {LoginService} from "../../auth/services/login.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private loginService: LoginService) {
  }

  logout() {
    this.loginService.logout()
  }
}
