import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  @Input() activeTab: string = 'manage-tournament';
  username: string | null = null;
  tabs = [
    {
      "displayName": "Manage Tournament",
      "route": "manage-tournament"
    },
    {
      "displayName": "Team Setup",
      "route": "team-setup"
    },
    {
      "displayName": "Fixture Setup",
      "route": "fixture-setup"
    }
  ]

  constructor(private router: Router) {  }

  ngOnInit() {
    if (typeof window !== 'undefined' && sessionStorage) {      
      const isLoggedIn = sessionStorage.getItem('isLoggedIn');
      if (isLoggedIn) {
        this.username = sessionStorage.getItem('username');
      }
    }
  }

  logout() {

    sessionStorage.removeItem('isLoggedIn');
    sessionStorage.removeItem('username');

    this.router.navigate(['/']);
  }  

}
