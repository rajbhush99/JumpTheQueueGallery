import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar} from '@angular/material/snack-bar';
import { AuthService } from 'src/app/core/security/auth.service';
import { LoginVisitor } from 'src/app/core/model/shared';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route: Router, private snackbar: MatSnackBar,
              private authService: AuthService) { }

  ngOnInit(): void {
    var value1 = localStorage.getItem('LoggedInUser');
    if ( value1 != null || value1 !== undefined || value1 !== '') {
    this.route.navigate(['event-list']);
    }
  }
  async loginUser(values) {
     const visitor: LoginVisitor = new LoginVisitor();
     visitor.username = values.email;
     let data =await this.authService.loginVisitor(visitor.username, values.password)
    // .subscribe( (data) => {
         console.log(data);
         if (data!=null) {
           this.authService.setVisitorId(data.id);
           this.authService.sendToken(data.username);
           this.route.navigate(['event-list']);
           this.snackbar.open('Login success', 'ok', {
             duration : 2000
           });
         } else {
               this.snackbar.open('access error', 'OK', {
                duration: 2000,
              });
         }
       }
    //   );
    //  }
    }


