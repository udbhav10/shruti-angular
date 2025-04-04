import { Routes } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { ManageTournamentComponent } from './components/manage-tournament/manage-tournament.component';
import { TeamSetupComponent } from './components/team-setup/team-setup.component';
import { FixtureSetupComponent } from './components/fixture-setup/fixture-setup.component';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { 
        path: 'manage-tournament', 
        component: ManageTournamentComponent, 
    },
    { 
        path: 'team-setup', 
        component: TeamSetupComponent, 
    },
    { 
        path: 'fixture-setup', 
        component: FixtureSetupComponent, 
    },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
