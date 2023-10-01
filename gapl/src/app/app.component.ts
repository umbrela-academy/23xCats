import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PagesModule } from './pages/pages.module';

@Component({
  standalone: true,
  imports: [
    PagesModule,
    RouterModule,
  ],
  selector: 'gapl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'karan';
}
