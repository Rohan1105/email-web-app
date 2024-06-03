import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClientModule, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  id: string = '';
  allUserName: string = '';
  allPassword: string = '';
  history: any = {};
  constructor(private router: Router,
    private http: HttpClient
  ) { }

  applyForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  ngOnInit(): void {
    this.getUsers().subscribe(userData => {
      console.log(userData);
      for (var i = 0; i < userData.length; i++) {
        this.allUserName = userData[i]['userName'];
        this.allPassword = userData[i]['password'];
        this.history[this.allUserName] = this.allPassword;
      }
    });
  }

  getUsers(): Observable<any> {
    return this.http.get<any>(`${"https://email-fdj2.onrender.com"}/users`);
  }

  createUser(userId: string, userName: string | null | undefined, password: string | null | undefined): Observable<any> {
    return this.http.post<any>(`${"https://email-fdj2.onrender.com"}/users`, { userId, userName, password })
      .pipe(
        catchError(error => {
          console.error('Error creating user:', error);
          let errorMessage = 'An error occurred while creating the user.';
          if (error instanceof HttpErrorResponse && error.status === 201) {
            errorMessage = 'User created successfully, but the response is not in JSON format.';
          }
          return throwError(errorMessage);
        })
      );
  }

  handleSignIn() {
    var flag = false;
    console.log(this.applyForm.value?.email);
    console.log(this.applyForm.value?.password);
    console.log(this.history);
    for (let key in this.history) {
      if (this.applyForm.value?.email == key && this.applyForm.value?.password == this.history[key]) {
        flag = true;
        this.router.navigate(['inbox']);
        break;
      }
    }
    if (flag == false) {
      Swal.fire({
        icon: 'error',
        title: 'User does not exist',
        text: 'Please check your Email Id and password and try again.',
        confirmButtonText: 'OK'
      });
    }
  }
  handleSignUp() {
    var flag = false;
    console.log(this.applyForm.value?.email);
    console.log(this.applyForm.value?.password);
    console.log(this.history);
    for (let key in this.history) {
      if (this.applyForm.value?.email == key && this.applyForm.value?.password == this.history[key]) {
        flag = true;
        Swal.fire({
          icon: 'error',
          title: 'User already exists',
          text: 'Please enter a new Email Id and try again.',
          confirmButtonText: 'OK'
        });
        break;
      }
    }
    if (flag == false) {
      this.createUser(this.id, this.applyForm.value?.email, this.applyForm.value?.password).subscribe(response => {
        Swal.fire({
          icon: 'success',
          title: 'Email Id created successfully!',
          text: 'You can now sign in with your new account.',
          confirmButtonText: 'OK'
        }).then(() => {
          window.location.reload();
        });
      });
    }
  }
}
