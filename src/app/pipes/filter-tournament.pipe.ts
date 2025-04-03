import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTournament',
  standalone: true
})
export class FilterTournamentPipe implements PipeTransform {
  transform(tournaments: any[], searchText: string): any[] {
    if (!searchText) return tournaments;
    searchText = searchText.toLowerCase();
    return tournaments.filter(tournament =>
      tournament.name.toLowerCase().includes(searchText)
    );
  }
}
