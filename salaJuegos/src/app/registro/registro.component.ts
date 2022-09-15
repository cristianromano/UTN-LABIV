import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { UserService } from '../services/user.services';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  form: FormGroup;
  loading:boolean = false;

  // constructor(private userService: UserService) {
  //   this.formReg = new FormGroup({
  //     email: new FormControl(),
  //     password: new FormControl()
  //   })
  // }

  constructor(
    private fb: FormBuilder,
    private auth: AngularFireAuth,
    private toast: ToastrService,
    private router: Router
  ) {
    this.form = this.fb.group({
      email: '',
      password: '',
      repetirPassword: '',
    });
  }

  // form = new FormGroup({
  //   email: new FormControl(''),
  //   password: new FormControl(''),
  // });

  // constructor(){

  // }

  ngOnInit(): void {}

  // onSubmit(){
  //   this.userService.register(this.formReg)
  //   .then(response => {
  //     console.log(response);
  //   })
  //   .catch(error=>console.log(error))
  // }

  onSubmit() {
    console.log(this.form.value);
    this.auth
      .createUserWithEmailAndPassword(
        this.form.value.email,
        this.form.value.password
      )
      .then((user) => {
        this.toast.success(
          'Se registro el usuario!!',
          'Registro Exitoso!!🤑​🤑​'
            
        );
        this.loading = true;
        this.router.navigate(['/menu']);
        
      })
      .catch((error) => {
        this.toast.error(
          this.firebaseErr(error.code),
          'Mensaje de error 😭​😭​'
        );
      });
    
  }

  firebaseErr(code: String) {
    switch (code) {
      case 'auth/email-already-in-use':
        return 'El usuario ya existe!!';
      case 'auth/weak-password':
        return 'la password debe contener como minimo 6 caracteres!';
      case 'auth/invalid-email':
        return 'Correo electronico invalido​';
      default:
        return 'no existe el caso';
      case 'auth/internal-error':
        return 'error interno , fijate de estar llenando todo el formulario';
    }
  }

  // All is this method
  onPasswordChange() {
    
    if (this.confirm_password.value == this.password.value) {
      this.confirm_password.setErrors(null);
      this.loading = true;
    } else {
      this.confirm_password.setErrors({ mismatch: true });
    }
  }

  // getting the form control elements
  get password(): AbstractControl {
    return this.form.controls['password'];
  }

  get confirm_password(): AbstractControl {
    return this.form.controls['repetirPassword'];
  }



}
