import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-loginadmin',
  templateUrl: './loginadmin.component.html',
  styleUrls: ['./loginadmin.component.scss']
})
export class LoginadminComponent implements OnInit {
  email = '';
  password = '';
  error = '';
  loading = false;
  constructor(private _auth: AuthService, private _router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(): void {
    this.loading = true;
    this.error = '';
    if (!this.email || !this.password) {
      this.error = 'Make sure to fill everything ;)';
    } else {
      this._auth
        .login({ email: this.email, password: this.password })
        .subscribe(
          (res) => {
            this.loading = false;
            this._router.navigate(['/']);
          },
          (err) => {
            console.log(err);
            this.error = err.error.message;
            this.loading = false;
          }
        );
    }
    
  }
  canSubmit(): boolean {
    return this.email.length > 0 && this.password.length > 0;
  }
}
