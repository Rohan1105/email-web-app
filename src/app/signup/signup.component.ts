import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../auth.service';
import {
  HttpClientModule,
  HttpClient,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, HttpClientModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  id: string = '';
  allUserName: string = '';
  allPassword: string = '';
  history: any = {};

  constructor(
    private router: Router,
    private http: HttpClient,
    private auth: AuthService
  ) {}

  applyForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });

  createUser(
    userId: string,
    name: string | null | undefined,
    userName: string | null | undefined,
    password: string | null | undefined
  ): Observable<any> {
    return this.http
      .post<any>(`${'https://email-fdj2.onrender.com'}/users`, {
        userId,
        name,
        userName,
        password,
      })
      .pipe(
        catchError((error) => {
          console.error('Error creating user:', error);
          let errorMessage = 'An error occurred while creating the user.';
          if (error instanceof HttpErrorResponse && error.status === 201) {
            errorMessage =
              'User created successfully, but the response is not in JSON format.';
          }
          return throwError(errorMessage);
        })
      );
  }

  handleSignUp() {
    var flag = false;
    console.log(this.applyForm.value?.email);
    console.log(this.applyForm.value?.password);
    console.log(this.history);
    for (let key in this.history) {
      if (
        this.applyForm.value?.email == key &&
        this.applyForm.value?.password == this.history[key]
      ) {
        flag = true;
        Swal.fire({
          icon: 'error',
          title: 'User already exists',
          text: 'Please enter a new Email Id and try again.',
          confirmButtonText: 'OK',
        });
        break;
      }
    }
    if (flag == false) {
      this.createUser(
        this.id,
        this.applyForm.value?.name,
        this.applyForm.value?.email,
        this.applyForm.value?.password
      ).subscribe((response) => {
        Swal.fire({
          icon: 'success',
          title: 'Email Id created successfully!',
          text: 'You can now sign in with your new account.',
          confirmButtonText: 'OK',
        }).then(() => {
          window.location.reload();
        });
      });
    }

    this.router.navigate(['']);
  }
}
