import { Component, inject } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { CryptosService } from '../../services/cryptos/cryptos.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  private readonly cryptoService = inject(CryptosService);

  readonly prices = this.cryptoService.prices;
  readonly directions = this.cryptoService.directions;

getArrowIcon(direction: 'up' | 'down' | 'none'): string {
  return {
    up: 'keyboard_arrow_up',
    down: 'keyboard_arrow_down',
    none: 'pause'
  }[direction];
}

getDirectionClass(direction: 'up' | 'down' | 'none'): string {
  return {
    up: 'text-green',
    down: 'text-red',
    none: 'text-muted'
  }[direction];
}
}
