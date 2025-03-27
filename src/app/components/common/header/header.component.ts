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
  @Input() activeTab: string = 'tournament-setup';
  tabs = [
    {
      "displayName": "Tournament Setup",
      "route": "tournament-setup"
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

  }

  logout() {
    this.router.navigate(['/']);
  }  

}
