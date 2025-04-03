import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../common/header/header.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { TournamentSetupComponent } from './components/tournament-setup/tournament-setup.component';
import { AddTournamentComponent } from './components/add-tournament/add-tournament.component';
import { ViewTournamentComponent } from './components/view-tournament/view-tournament.component';

@Component({
  selector: 'app-manage-tournament',
  standalone: true,
  imports: [HeaderComponent, RouterModule, CommonModule, TournamentSetupComponent, AddTournamentComponent, ViewTournamentComponent],
  templateUrl: './manage-tournament.component.html',
  styleUrl: './manage-tournament.component.scss'
})
export class ManageTournamentComponent implements OnInit  {
  mode: string = 'setup';

  constructor(private router: Router) {}

  ngOnInit(): void {
    if (typeof window !== 'undefined' && sessionStorage) { 
      const isLoggedIn = sessionStorage.getItem('isLoggedIn');
      if (!isLoggedIn) {
        this.router.navigate(['/']);
        return;
      }
    }
  }
}