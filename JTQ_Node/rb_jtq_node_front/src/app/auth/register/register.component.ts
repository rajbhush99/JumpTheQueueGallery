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
 async registerUser(values) {
  const visitor: Visitor = new Visitor();
  visitor.username = values.username;
  visitor.name =  values.name;
  visitor.phoneNumber = values.phoneNumber;
  visitor.password =   values.password;
  visitor.acceptedCommercial = values.acceptedCommercial;
  visitor.acceptedTerms = values.acceptedTerms;
  visitor.userType = false;
  try{
  let data = await this.authService.registerVisitor(visitor)
  // .subscribe(
  //   (data) => {
      console.log(visitor);
      console.log(data);
      if(data==null){
        this.router.navigate(['register'])
      }
      else{
      this.snackbar.open(
        'Registered successfully with id ' + data.id, '',
        {
          duration: 3000,
          panelClass: ['success'],
        }
      );
      this.router.navigate(['login']);
      }
    }catch(e){
      this.snackbar.open(e.message,'OK',{
        duration: 5000,
      })
    }
  }
}
  //   },
  //   (err) => this.snackbar.open(err.error.message, 'OK', {
  //     duration: 5000,
  //   })
  // );

