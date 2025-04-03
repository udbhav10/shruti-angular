import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;
  loginMessage: string = '';

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  getCookie(name: string): string | null {
    const cookies = document.cookie.split('; ');
    const cookie = cookies.find(row => row.startsWith(name + '='));
    return cookie ? decodeURIComponent(cookie.split('=')[1]) : null;
  }

  onLogin() {
    const { username, password } = this.loginForm.value;
    const storedData = this.getCookie('userCredentials');
  
    if (storedData) {
      const credentials = JSON.parse(storedData);
  
      if (credentials[username] && credentials[username] === password) {
        this.loginMessage = 'Login successful!';

        sessionStorage.setItem('isLoggedIn', 'true');
        sessionStorage.setItem('username', username);
        
        // Redirect to tournament-setup
        this.router.navigate(['/manage-tournament']);
      } else {
        this.loginMessage = 'Invalid username or password.';
      }
    } else {
      this.loginMessage = 'No user found. Please sign up first.';
    }
  }
}
