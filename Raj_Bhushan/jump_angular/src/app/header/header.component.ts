import { Component, Input } from "@angular/core";
import { Router } from '@angular/router';
import { AuthService } from '../core/security/auth.service';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent {
  constructor(public authService: AuthService, private route: Router){}
  logout()
  {
    this.authService.logout();
    this.route.navigate(['login']);
  }
}
