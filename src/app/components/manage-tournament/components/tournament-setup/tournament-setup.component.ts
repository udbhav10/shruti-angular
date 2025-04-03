import { Component, OnInit } from '@angular/core';
import { DateFormatPipe } from '../../../../pipes/date-format.pipe';
import { FilterTournamentPipe } from '../../../../pipes/filter-tournament.pipe';
import { CommonModule } from '@angular/common';
import tournaments from '../../assets/tournaments.json';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-tournament-setup',
  standalone: true,
  imports: [DateFormatPipe, FilterTournamentPipe, CommonModule, MatTableModule, MatIconModule, MatButtonModule, MatFormFieldModule],
  templateUrl: './tournament-setup.component.html',
  styleUrl: './tournament-setup.component.scss'
})
export class TournamentSetupComponent implements OnInit {
  displayedColumns: string[] = ['name', 'startDate', 'endDate', 'action'];
  dataSource: any[] = tournaments;
  constructor() {}

  ngOnInit(): void {
    
  }

}
