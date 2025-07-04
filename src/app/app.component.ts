import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatToolbarModule,
    RouterLink,
    MatIconModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title = 'StarBank';
}
