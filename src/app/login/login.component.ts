import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(private router: Router) {}

  applyForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  handleSignIn() {
    console.log(this.applyForm.value?.email);
    console.log('sign in clicked.');
    this.router.navigate(['inbox']);
  }
}
