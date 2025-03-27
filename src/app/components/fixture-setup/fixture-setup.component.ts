import { Component } from '@angular/core';
import { HeaderComponent } from '../common/header/header.component';

@Component({
  selector: 'app-fixture-setup',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './fixture-setup.component.html',
  styleUrl: './fixture-setup.component.scss'
})
export class FixtureSetupComponent {

}
