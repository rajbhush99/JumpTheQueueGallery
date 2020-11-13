import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar} from '@angular/material/snack-bar';
import { AuthService } from 'src/app/core/security/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route: Router, private snackbar: MatSnackBar,
              private authService: AuthService) { }

  ngOnInit(): void {
  
  }

  loginUser(values: any)
   {
    if (true)
    { 
      this.snackbar.open('Login success', 'Success', {
        duration: 3000,
       }
      );
     
      this.authService.sendToken(values.email);
      this.route.navigate(['event-list']);
    } else
    {
      this.snackbar.open('Failed to login', 'Error', {
        duration: 3000,
        panelClass: ['mat-toolbar', 'mat-warn']}
      );
    }
  }
}
