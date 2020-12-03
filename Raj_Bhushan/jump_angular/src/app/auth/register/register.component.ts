import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Visitor } from 'src/app/core/model/shared';
import { AuthService } from 'src/app/core/security/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService , private router: Router ,
              private snackbar: MatSnackBar) { }

  ngOnInit(): void {
  }
registerUser(values) {
  const visitor: Visitor = new Visitor();
  visitor.username = values.username;
  visitor.name =  values.name;
  visitor.phoneNumber = values.phoneNumber;
  visitor.password =   values.password;
  visitor.acceptedCommercial = values.acceptedCommercial;
  visitor.acceptedTerms = values.acceptedTerms;
  visitor.userType = false;
  this.authService.registerVisitor(visitor).subscribe(
    (data) => {
      this.snackbar.open(
        'Registered successfully with id ' + data.id, '',
        {
          duration: 3000,
          panelClass: ['success'],
        }
      );
      this.router.navigate(['login']);
    },
    (err) => this.snackbar.open(err.error.message, 'OK', {
      duration: 5000,
    })
  );
}
}

