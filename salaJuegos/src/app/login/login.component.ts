import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginUser: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AngularFireAuth,
    private toast: ToastrService,
    private router: Router
  ) {
    this.loginUser = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    this.auth
      .signInWithEmailAndPassword(
        this.loginUser.value.email,
        this.loginUser.value.password
      )
      .then((success) => {
        this.toast.success('Login exitoso!')
        this.router.navigate(['/menu']);
      })
      .catch((err) => {
        this.toast.error(this.firebaseErr(err.code));
      });
  }

  ngOnInit(): void {}


  firebaseErr(code: String) {
    switch (code) {
      case 'auth/wrong-password':
        return 'Password incorrecta!';
      case 'auth/user-not-found':
        return 'Usuario no existe en la base de datos!';
      default:
        return 'no existe el caso';
      case 'auth/invalid-email':
        return 'Se necesita que se completen los datos!';
    }
  }
}
